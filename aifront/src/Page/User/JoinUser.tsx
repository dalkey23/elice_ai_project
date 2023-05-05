import React, { useState, useCallback, useEffect } from "react";
import * as SC from "./JoinUserSC";
import { UserdataRequest } from "../../Types/Userdata.type";
import { useNavigate } from "react-router-dom";
import { useJoinUser } from "../../Component/Hook/User.hook";
import Modal from "../../Component/Base/Modal";
const JoinUser: React.FC = () => {
    const navigate = useNavigate();
    const { createUserdata, isError: isJoinUserError } = useJoinUser();
    const [userdata, setUserdata] = useState<UserdataRequest>({
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
        zipCode: 0,
        mainAddress: "",
        detailAddress: "",
    });

    const checkedEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, email: e.target.value };
        });
    };

    const checkedLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, lastName: e.target.value };
        });
    };

    const checkedFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, firstName: e.target.value };
        });
    };

    const checkedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, password: e.target.value };
        });
    };

    const checkedConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(
            `userdata password : ${userdata.password}, target value : ${e.target.value}`
        );
    };

    const checkedPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, phoneNumber: e.target.value };
        });
    };

    const checkedNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, nickname: e.target.value };
        });
    };

    const checkedGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, gender: e.target.value };
        });
    };

    const checkedBirthYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, birthYear: Number(e.target.value) };
        });
    };
    const checkedBirthMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, birthMonth: Number(e.target.value) };
        });
    };
    const checkedBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, birthDate: Number(e.target.value) };
        });
    };

    const checkedZipcode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, zipCode: Number(e.target.value) };
        });
    };
    const checkedMainAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, mainAddress: e.target.value };
        });
    };
    const checkedDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, detailAddress: e.target.value };
        });
    };

    const checkedProfilePhotoUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, detailAddress: e.target.value };
        });
    };

    const submitHandler = async (e: React.MouseEvent) => {
        e.preventDefault();

        await createUserdata(userdata, {
            onSuccess(res) {
                console.log(res);
                alert("작성이 완료 되었습니다!");
                navigate("/CompletedJoin");
            },
            onError(err) {
                console.log(err);
                alert("다시 작성해 주세요.");
            },
        });
    };

    //모달창
    const [isModal, setIsModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setIsModal(!isModal);
        console.log(isModal);
    }, [isModal]);

    return (
        <SC.JoinContainer>
            <SC.JoinDiv1>
                <SC.JoinItem>
                    <label>이메일</label>
                    <input type="text" name="email" onChange={checkedEmail} />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        onChange={checkedPassword}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        name="confirmPW"
                        onChange={checkedConfirmPW}
                    />
                </SC.JoinItem>
            </SC.JoinDiv1>
            <SC.JoinDiv2>
                <SC.JoinItem>
                    <label>이름</label>
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
                    <label>닉네임</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="dong"
                        onChange={checkedNickname}
                    />
                </SC.JoinItem>

                <SC.JoinItem>
                    <label>생년월일</label>
                    <input
                        type="text"
                        name="birthYear"
                        placeholder="Year"
                        onChange={checkedBirthYear}
                    />
                    <input
                        type="text"
                        name="birthMonth"
                        placeholder="Month"
                        onChange={checkedBirthMonth}
                    />
                    <input
                        type="text"
                        name="birthDate"
                        placeholder="Date"
                        onChange={checkedBirthDate}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <input
                        type="radio"
                        name="gender"
                        value="MALE"
                        onChange={checkedGender}
                    />
                    <label>남자</label>
                    <input
                        type="radio"
                        name="gender"
                        value="FEMALE"
                        onChange={checkedGender}
                    />
                    <label>여자</label>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>휴대폰 번호</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="010-1234-1234"
                        onChange={checkedPhoneNumber}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <input
                        type="text"
                        name="zipCode"
                        placeholder="04799"
                        onChange={checkedZipcode}
                    />
                    <div>
                        <button onClick={onClickToggleModal}>
                            우편번호 검색
                        </button>
                        {isModal && (
                            <Modal
                                onClickToggleModal={onClickToggleModal}></Modal>
                        )}
                    </div>
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
            </SC.JoinDiv2>
            <SC.ButtonDiv>
                <SC.CancelButton
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}>
                    취소
                </SC.CancelButton>
                <SC.ConfirmButton onClick={submitHandler}>
                    확인
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.JoinContainer>
    );
};

export default JoinUser;
