import React, { useCallback, useState, ChangeEvent, MouseEvent } from "react";
import * as SC from "./UserSC";

const UserJoin: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [confirmPW, setConfirmPW] = useState<string>("");

    const [nickname, setNickname] = useState<string>("");

    const [gender, setGender] = useState<string>("");

    const [birthYear, setBirthYear] = useState<string>("");
    const [birthMonth, setBirthMonth] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");

    const [zipcode, setZipcode] = useState<string>("");
    const [mainAddress, setMainAddress] = useState<string>("");
    const [detailAddress, setDetailAddress] = useState<string>("");

    const checkedEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const checkedPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
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

    const checkedNickname = (e: ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    };

    const checkedGender = (e: MouseEvent) => {
        
    };


    const checkedBirthYear = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthYear(e.target.value);
    };
    const checkedBirthMonth = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthMonth(e.target.value);
    };
    const checkedBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDate(e.target.value);
    };

    const checkedZipcode = (e: ChangeEvent<HTMLInputElement>) => {
        setZipcode(e.target.value);
    };
    const checkedMainAddress = (e: ChangeEvent<HTMLInputElement>) => {
        setMainAddress(e.target.value);
    };
    const checkedDetailAddress = (e: ChangeEvent<HTMLInputElement>) => {
        setDetailAddress(e.target.value);
    };

    const submitHandler = (e: MouseEvent) => {
        e.preventDefault();

        console.log(`email: ${email}, name : ${lastName} ${firstName}`);
    };
    return (
        <SC.JoinContainer>
            <SC.JoinDiv>
                <SC.JoinItem>
                    <input
                        type="text"
                        name="email"
                        placeholder="gildong@gmail.com"
                        value={email}
                        onChange={checkedEmail}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="010-1234-1234"
                        value={phoneNumber}
                        onChange={checkedPhoneNumber}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
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
                </SC.JoinItem>
                <SC.JoinItem>
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
                </SC.JoinItem>
                <SC.JoinItem></SC.JoinItem>
            </SC.JoinDiv>
            <SC.JoinDiv>
                <SC.JoinItem>
                    <label>닉네임</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="dong"
                        value={nickname}
                        onChange={checkedNickname}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <input type="radio" name="gender" value="male" onClick={checkedGender} />
                    <label>남자</label>
                    <input type="radio" name="gender" value="female" />
                    <label>여자</label>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>생년월일</label>
                    <input
                        type="text"
                        name="birthYear"
                        placeholder="1900"
                        value={birthYear}
                        onChange={checkedBirthYear}
                    />
                    <input
                        type="text"
                        name="birthMonth"
                        placeholder="00"
                        value={birthMonth}
                        onChange={checkedBirthMonth}
                    />
                    <input
                        type="text"
                        name="birthDate"
                        placeholder="00"
                        value={birthDate}
                        onChange={checkedBirthDate}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="04799"
                        value={zipcode}
                        onChange={checkedZipcode}
                    />
                    <input
                        type="text"
                        name="mainAddress"
                        placeholder="서울시 성동구 광나루로6길"
                        value={mainAddress}
                        onChange={checkedMainAddress}
                    />
                    <input
                        type="text"
                        name="detailAddress"
                        placeholder="49"
                        value={detailAddress}
                        onChange={checkedDetailAddress}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>프로필 사진</label>
                    <input type="file" name="profile" />
                </SC.JoinItem>
            </SC.JoinDiv>
            <SC.ButtonDiv>
                <SC.CancelButton type="button">취소</SC.CancelButton>
                <SC.ConfirmButton onClick={submitHandler}>
                    확인
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.JoinContainer>
    );
};

export default UserJoin;
