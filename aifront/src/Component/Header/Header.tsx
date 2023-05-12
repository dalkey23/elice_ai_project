import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as SC from "./HeaderSC";

const Header : React.FC = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return(
        <SC.Header>
                <NavLink to = '/'>홈</NavLink>
                <NavLink to = '/JournalPost'>일기쓰기</NavLink>
                <NavLink to = '/JournalCheck'>일기조회</NavLink>
                <NavLink to = '/CommunityList'>커뮤니티</NavLink>
                <NavLink to = '/UserJoin'>회원가입</NavLink>
                <NavLink to = '/Login'>로그인</NavLink>

                <NavLink to = '/Mypage'>마이페이지</NavLink>
                <button onClick={logoutHandler}>로그아웃</button>
        </SC.Header>
    )
}

export default Header;