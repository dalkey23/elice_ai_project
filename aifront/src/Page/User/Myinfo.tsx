import { useNavigate } from "react-router";
import { useGetLoginedUser } from "../../Component/Hook/User.hook";
import * as SC from "./JoinUserSC";
import { UserdataRequest } from "../../Types/Userdata.type";

const Myinfo = () => {
    const { LoginedUser, isLogined } = useGetLoginedUser();
    const userdata = LoginedUser?.data.item;
    const navigate = useNavigate();
    //const { editUserdata } = useEditUser();

    const id = 16

    const submitHandler = async (e: React.MouseEvent) => {
        e.preventDefault();

       // await editUserdata(id, userdata)
    };

 
    
    if(!isLogined){
        navigate("/Login")
    }

    if(!userdata){
        return<></>
    }
    return (
        <SC.JoinContainer>
            <SC.InfoTitle>나의 정보</SC.InfoTitle>
            <SC.JoinDiv1>
                <SC.JoinItem>
                    <label>이메일</label>
                    <input type="text" name="email" defaultValue={userdata?.email} />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호</label>
                    <input type="password" name="password" />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>비밀번호 확인</label>
                    <input type="password" name="confirmPW" />
                </SC.JoinItem>
            </SC.JoinDiv1>
            <SC.JoinDiv2>
                <SC.JoinItem>
                    <label>이름</label>
                    <input type="text" name="lastName" defaultValue={userdata?.nameInfo.lastName} />
                    <input type="text" name="firstName" defaultValue={userdata?.nameInfo.firstName} />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>닉네임</label>
                    <input type="text" name="nickname" placeholder="dong" defaultValue={userdata?.nickname}/>
                </SC.JoinItem>

                <SC.JoinItem>
                    <label>생년월일</label>
                    <input type="number" name="birthYear" defaultValue={userdata?.birthInfo.year}/>
                    <input type="number" name="birthMonth" defaultValue={userdata?.birthInfo.month} />
                    <input type="number" name="birthDate" defaultValue={userdata?.birthInfo.date}/>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>성별</label>
                    <input type="radio" name="gender" value="MALE" />
                    <label>남자</label>
                    <input type="radio" name="gender" value="FEMALE" />
                    <label>여자</label>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>휴대폰 번호</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        defaultValue={userdata?.phoneNumber}
                    />
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>주소</label>
                    <input type="text" name="zipCode"  defaultValue={userdata?.addressInfo.zipCode} />
                    <div>
                        <button>우편번호 검색</button>
                    </div>
                    <input
                        type="text"
                        name="mainAddress"
                        defaultValue={userdata?.addressInfo.mainAddress}
                    />
                    <input type="text" name="detailAddress" defaultValue={userdata?.addressInfo.detailAddress}/>
                </SC.JoinItem>
                <SC.JoinItem>
                    <label>프로필 사진</label>
                    <input type="file" name="profilePhotoUrl" />
                </SC.JoinItem>
            </SC.JoinDiv2>
            <SC.ButtonDiv>
                <SC.ConfirmButton onClick={submitHandler}>
                    수정
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.JoinContainer>
    );
};

export default Myinfo;
