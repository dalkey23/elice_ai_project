import * as SC from "./MypageSC";
import { useNavigate } from "react-router-dom";
import { useGetLoginedUser } from "../../Component/Hook/User.hook";
import { useEffect } from "react";

const Mypage = () => {
    const navigate = useNavigate();

    const { isLogined } = useGetLoginedUser();

    useEffect(()=>{
        if (!isLogined) {
            navigate("/Login");
        }
    },[isLogined])

  

    return (
        <SC.MypageContainer>
            <button
                onClick={() => {
                    navigate("/Myinfo");
                }}>
                나의 정보
            </button>
            <button>나의 게시글</button>
            <button
                onClick={() => {
                    navigate("/DeletedUser");
                }}>
                회원 탈퇴
            </button>
        </SC.MypageContainer>
    );
};

export default Mypage;
