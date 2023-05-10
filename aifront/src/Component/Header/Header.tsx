import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as SC from "./HeaderSC";
import { useRecoilState } from "recoil";
import { LoginState } from "../../Store/Store";


const Header : React.FC = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);


    const clickHandler = async (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        // navigate("/")
        window.location.href='/';
        console.log(isLoggedIn)
        
    };

    return(
        <SC.Header>
                <NavLink to = '/'>홈</NavLink>
                <NavLink to = '/JournalPost'>일기쓰기</NavLink>
                <NavLink to = '/JournalCheck'>일기조회</NavLink>
                <NavLink to = '/CommunityList'>커뮤니티</NavLink>
                
                
                
                {(isLoggedIn)? (<><NavLink to = '/Mypage'>마이페이지</NavLink><button onClick={clickHandler}>로그아웃</button></>):(<><NavLink to = '/UserJoin'>회원가입</NavLink><NavLink to = '/Login'>로그인</NavLink></>)}
        </SC.Header>
    )
}

export default Header;