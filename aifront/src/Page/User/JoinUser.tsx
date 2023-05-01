import React, { useState, ChangeEvent, MouseEvent } from "react";
import * as SC from "./UserSC";
import { Userdata } from "../../Types/Userdata.type";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const JoinUser: React.FC = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState<Userdata>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        nickname: "",
        phoneNumber: "",
        gender: "",
        birthYear: 0,
        birthMonth: 0,
        birthDate: 0,
        profilePhotoUrl: "",
        zipcode: 0,
        mainAddress: "",
        detailAddress: "",
    });

    const checkedEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, email: e.target.value };
        });
    };

    const checkedLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, lastName: e.target.value };
        });
    };

    const checkedFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, firstName: e.target.value };
        });
    };

    const checkedPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, password: e.target.value };
        });
    };

    const checkedConfirmPW = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(
            `userdata password : ${userdata.password}, target value : ${e.target.value}`
        );
    };

    const checkedPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, phoneNumber: e.target.value };
        });
    };

    const checkedNickname = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, nickname: e.target.value };
        });
    };

    const checkedGender = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, gender: e.target.value };
        });
    };

    const checkedBirthYear = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, birthYear: Number(e.target.value) };
        });
    };
    const checkedBirthMonth = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, birthMonth: Number(e.target.value) };
        });
    };
    const checkedBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, birthDate: Number(e.target.value) };
        });
    };

    const checkedZipcode = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, zipcode: Number(e.target.value) };
        });
    };
    const checkedMainAddress = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, mainAddress: e.target.value };
        });
    };
    const checkedDetailAddress = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, detailAddress: e.target.value };
        });
    };

    const checkedProfilePhotoUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, detailAddress: e.target.value };
        });
    };

    const createUser = useMutation((userdata: Userdata) =>
        axios.post(
            "http://kdt-ai6-team02.elicecoding.com/api/users/sign-up",
            userdata
        )
    );

    const submitHandler = (e: MouseEvent) => {
        e.preventDefault();
        console.log(userdata);

        try {
            createUser.mutate(userdata)
            navigate('/CompletedJoin')
        } catch (error) {
            console.log(error)
        }

    };
    return (
        <SC.JoinContainer>
            <SC.JoinDiv>
                <SC.JoinItem>
                    <input
                        type="text"
                        name="email"
                        placeholder="gildong@gmail.com"
                        onChange={checkedEmail}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="홍"
                        onChange={checkedLastName}
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="길동"
                        onChange={checkedFirstName}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        onChange={checkedPassword}
                    />
                    <input
                        type="password"
                        name="confirmPW"
                        placeholder="비밀번호를 확인"
                        onChange={checkedConfirmPW}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="010-1234-1234"
                        onChange={checkedPhoneNumber}
                    />
                </SC.JoinItem>
            </SC.JoinDiv>
            <SC.JoinDiv>
                <SC.JoinItem>
                    <label>닉네임</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="dong"
                        onChange={checkedNickname}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={checkedGender}
                    />
                    <label>남자</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={checkedGender}
                    />
                    <label>여자</label>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>생년월일</label>
                    <input
                        type="text"
                        name="birthYear"
                        placeholder="1900"
                        onChange={checkedBirthYear}
                    />
                    <input
                        type="text"
                        name="birthMonth"
                        placeholder="00"
                        onChange={checkedBirthMonth}
                    />
                    <input
                        type="text"
                        name="birthDate"
                        placeholder="00"
                        onChange={checkedBirthDate}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="04799"
                        onChange={checkedZipcode}
                    />
                    <input
                        type="text"
                        name="mainAddress"
                        placeholder="서울시 성동구 광나루로6길"
                        onChange={checkedMainAddress}
                    />
                    <input
                        type="text"
                        name="detailAddress"
                        placeholder="49"
                        onChange={checkedDetailAddress}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>프로필 사진</label>
                    <input
                        type="file"
                        name="profilePhotoUrl"
                        onChange={checkedProfilePhotoUrl}
                    />
                </SC.JoinItem>
            </SC.JoinDiv>
            <SC.ButtonDiv>
                <SC.CancelButton type="button" onClick={()=>{navigate("/")}}>취소</SC.CancelButton>
                <SC.ConfirmButton onClick={submitHandler}>
                    확인
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.JoinContainer>
    );
};

export default JoinUser;
