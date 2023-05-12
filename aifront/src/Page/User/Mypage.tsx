import * as SC from './MypageSC'
import { useRecoilState } from "recoil";
import { LoginState } from "../../Store/Store";
import { useNavigate } from "react-router-dom";



const Mypage = ()=>{
    
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    


    if(!isLoggedIn){
        navigate("/Login")
    }


    return (
        <SC.MypageContainer>
      
            <button onClick={()=>{navigate("/Myinfo")}}>
                나의 정보
            </button>
            <button>
                나의 게시글
            </button>
            <button>
                회원 탈퇴
            </button>
        </SC.MypageContainer>
    )
}

export default Mypage;