import * as bcrypt from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../dto/jwt-payload';
import { Status } from '@prisma/client';
import { ResourceDuplicatedException } from '../../../common/customExceptions/resource-duplicated.exception';
import { NotFoundException } from '../../../common/customExceptions/not-found.exception';
import { CreateUserRequest } from '../dto/request/create-user.request';
import { CreateUserResponse } from '../dto/response/create-user.response';
import { LoginUserRequest } from '../dto/request/login-user.request';
import { LoginUserResponse } from '../dto/response/login-user.response';
import { ReadUserResponse } from '../dto/response/read-user.response';
import { UserValidator } from '../validator/user.validator';
import { UserRepository } from '../../domain/user.repository';
import { AddressInfoRepository } from '../../domain/address-info.repository';
import { NotAuthorizedException } from '../../../common/customExceptions/not-authorized.exception';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    @Inject('AddressInfoRepository')
    private readonly addressInfoRepository: AddressInfoRepository,
    private readonly userValidator: UserValidator,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // 트랜잭션 단위로 회원가입 로직을 처리하는 메소드
  async signup(createRequest: CreateUserRequest): Promise<CreateUserResponse> {
    // 트랜잭션을 이용해서 생성 요청을 처리
    return await this.prismaService.$transaction(async () =>
      this.getSignupTransaction(createRequest),
    );
  }

  // 로그인을 처리하는 메소드
  async login(loginRequest: LoginUserRequest): Promise<LoginUserResponse> {
    // 트랜잭션을 이용해서 생성 요청을 처리
    return await this.prismaService.$transaction(async () =>
      this.getLoginTransaction(loginRequest),
    );
  }

  // 프로필 조회를 처리하는 메소드
  async findByJwtPayload(payload: JwtPayload): Promise<ReadUserResponse> {
    // 트랜잭션을 이용해서 생성 요청을 처리
    return await this.prismaService.$transaction(async () =>
      this.getProfileTransaction(payload),
    );
  }

  // 회원가입 트랜잭션 내부의 로직을 정의하는 private 메소드
  private async getSignupTransaction(
    createRequest: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    // 1. 생성 이전에 검증
    const validationResult = await this.userValidator.isCreatable(
      createRequest,
    );

    if (!validationResult.success) {
      throw new ResourceDuplicatedException(validationResult.message);
    }

    // 2. password를 bcrypt를 이용해 해싱
    const hashedRequest = await createRequest.getHashedRequest();

    // 3. 요청 dto로부터 user 엔티티 추출 후 생성 쿼리를 이용해 사용자 생성
    const user = hashedRequest.toUserEntity();

    const createdUser = await this.userRepository.create(user);

    // 4. 요청 dto로부터 addressInfo 엔티티 추출 후 생성 쿼리를 이용해 주소 생성
    const addressInfo = hashedRequest.toAddressInfoEntity(createdUser.id);

    const createdAddressInfo = await this.addressInfoRepository.create(
      addressInfo,
    );

    // 5. 응답 DTO를 정의하고 반환
    return CreateUserResponse.fromEntities(createdUser, createdAddressInfo);
  }

  private async getLoginTransaction(
    loginRequest: LoginUserRequest,
  ): Promise<LoginUserResponse> {
    const { email, password } = loginRequest;

    const userByEmail = await this.userRepository.findRegisteredUserByEmail(
      email,
    );

    if (!userByEmail) {
      throw new NotFoundException(
        '사용자 이메일 또는 패스워드를 다시 확인해주세요',
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      userByEmail.password,
    );

    if (!isPasswordValid) {
      throw new NotFoundException(
        '사용자 이메일 또는 페스워드를 다시 확인해주세요',
      );
    }

    const payload: JwtPayload = {
      id: Number(userByEmail.id),
      email: userByEmail.email,
      role: userByEmail.role,
    };

    return new LoginUserResponse(this.jwtService.sign(payload));
  }

  // 프로필 조회 트랜잭션 쿼리들을 정의하는 메소드
  async getProfileTransaction(payload: JwtPayload): Promise<ReadUserResponse> {
    const { id } = payload;

    const foundUser = await this.userRepository.findById(id);

    if (!foundUser || foundUser.status === Status.UNREGISTERED) {
      throw new NotFoundException('올바르지 않은 접근입니다');
    }

    const foundAddressInfo = await this.addressInfoRepository.findByUserId(
      Number(foundUser.id),
    );

    return ReadUserResponse.fromEntities(foundUser, foundAddressInfo);
  }
}
