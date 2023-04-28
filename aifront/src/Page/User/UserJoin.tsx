import React, { useCallback, useState, ChangeEvent } from "react";
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
    const [email, setEmail] = useState<string>("");

    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [confirmPW, setConfirmPW] = useState<string>("");

    const checkedEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const checkedLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const checkedFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const checkedPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const checkedConfirmPW = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPW(e.target.value);
    };

    return (
        <JoinContainer>
            <JoinDiv>
                <JoinItem>
                    <input
                        type="text"
                        name="email"
                        placeholder="gildong@gmail.com"
                        value={email}
                        onChange={checkedEmail}
                    />
                </JoinItem>
                <JoinItem>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="홍"
                        value={lastName}
                        onChange={checkedLastName}
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="길동"
                        value={firstName}
                        onChange={checkedFirstName}
                    />
                </JoinItem>
                <JoinItem>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={checkedPassword}
                    />
                    <input
                        type="password"
                        name="confirmPW"
                        placeholder="비밀번호를 확인"
                        value={confirmPW}
                        onChange={checkedConfirmPW}
                    />
                </JoinItem>
                <JoinItem></JoinItem>
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
