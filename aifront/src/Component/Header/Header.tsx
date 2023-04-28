import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderSC } from "./HeaderSC";

const Header : React.FC = () => {
    return(
        <HeaderSC>
                <NavLink to = '/'>홈</NavLink>
                <NavLink to = '/JournalPost'>일기쓰기</NavLink>
                <NavLink to = '/UserJoin'>회원가입</NavLink>
        </HeaderSC>
    )
}

export default Header;