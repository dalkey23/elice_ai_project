import { Module } from '@nestjs/common';
import { UsersService } from './application/service/users.service';
import { UsersController } from './presentation/controller/users.controller';
import { UserDao } from './infrastructure/user.dao';
import { UserValidator } from './application/validator/user.validator';
import { AddressInfoDao } from './infrastructure/address-info.dao';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3h' },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UserRepository',
      useClass: UserDao,
    },
    {
      provide: 'AddressInfoRepository',
      useClass: AddressInfoDao,
    },
    UserValidator,
  ],
  exports: [UsersService],
})
export class UsersModule {}
