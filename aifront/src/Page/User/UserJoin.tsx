import React from "react";
import axios from "axios";
import {
  JoinDiv,
  JoinItem,
  JoinContainer,
  ConfirmButton,
  CancelButton,
  ButtonDiv,
} from "./UserSC";

const UserJoin: React.FC = () => {
  return (
    <JoinContainer>
      <JoinDiv>
        <JoinItem>
          <label>이메일</label>
          <input type="text" name="email" />
        </JoinItem>
        <JoinItem>
          <label>이름</label>
          <input type="text" name="name" />
        </JoinItem>
        <JoinItem>
          <label>비밀번호</label>
          <input type="text" name="password" />
        </JoinItem>
        <JoinItem>
          <label>비밀번호 확인</label>
          <input type="text" name="confirmPw" />
        </JoinItem>
      </JoinDiv>
      <JoinDiv>
        <JoinItem>
          <label>닉네임</label>
          <input type="text" name="nickname" />
        </JoinItem>
        <JoinItem>
          <label>성별</label>
          <input type="radio" name="gender" value="male" />
          <label>남자</label>
          <input type="radio" name="gender" value="female" />
          <label>여자</label>
        </JoinItem>
        <JoinItem>
          <label>생년월일</label>
          <input type="text" name="birth" />
        </JoinItem>
        <JoinItem>
          <label>주소</label>
          <input type="text" name="address" />
        </JoinItem>
        <JoinItem>
          <label>프로필 사진</label>
          <input type="file" name="profile" />
        </JoinItem>
      </JoinDiv>
      <ButtonDiv>
        <CancelButton>취소</CancelButton>
        <ConfirmButton>확인</ConfirmButton>
      </ButtonDiv>
    </JoinContainer>
  );
};

export default UserJoin;
