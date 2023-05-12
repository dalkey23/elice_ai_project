import { useGetUserdata } from "../../Component/Hook/User.hook";
import * as SC from "./JoinUserSC";

const Myinfo = () =>{
    const id = 12;
    const { data } = useGetUserdata(id)
    console.log(data)
    return (
        <SC.JoinContainer>
            <SC.InfoTitle>나의 정보</SC.InfoTitle>
            <SC.JoinDiv1>
                <SC.JoinItem>
                    <label>이메일</label>
                    <input type="text" name="email"  />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                       
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        name="confirmPW"
                        
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
                        
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="길동"
                       
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>닉네임</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="dong"
                        
                    />
                </SC.JoinItem>

                <SC.JoinItem>
                    <label>생년월일</label>
                    <input
                        type="text"
                        name="birthYear"
                        placeholder="Year"
                        
                    />
                    <input
                        type="text"
                        name="birthMonth"
                        placeholder="Month"
                        
                    />
                    <input
                        type="text"
                        name="birthDate"
                        placeholder="Date"
                        
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <input
                        type="radio"
                        name="gender"
                        value="MALE"
                       
                    />
                    <label>남자</label>
                    <input
                        type="radio"
                        name="gender"
                        value="FEMALE"
                        
                    />
                    <label>여자</label>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>휴대폰 번호</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="010-1234-1234"
                       
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <input
                        type="text"
                        name="zipCode"
                        placeholder="04799"
                        
                    />
                    <div>
                        <button >
                            우편번호 검색
                        </button>
                        
                    </div>
                    <input
                        type="text"
                        name="mainAddress"
                        placeholder="서울시 성동구 광나루로6길"
                        
                    />
                    <input
                        type="text"
                        name="detailAddress"
                        placeholder="49"
                        
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>프로필 사진</label>
                    <input
                        type="file"
                        name="profilePhotoUrl"
                       
                    />
                </SC.JoinItem>
            </SC.JoinDiv2>
        </SC.JoinContainer>
    )
}

export default Myinfo