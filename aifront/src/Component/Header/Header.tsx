import React from "react";
import { NavLink } from "react-router-dom";
import * as SC from "./HeaderSC";

const Header : React.FC = () => {
    return(
        <SC.Header>
                <NavLink to = '/'>홈</NavLink>
                <NavLink to = '/JournalPost'>일기쓰기</NavLink>
                <NavLink to = '/CommunityList'>커뮤니티</NavLink>
                <NavLink to = '/UserJoin'>회원가입</NavLink>
        </SC.Header>
    )
}

export default Header;