import React from "react";
import { NavLink, Router } from "react-router-dom";

import { HeaderSC } from "./HeaderSC";

const Header : React.FC = () => {
    return(
        <HeaderSC>
                <NavLink to = '/'>홈</NavLink>
                <NavLink to = '/JournalPost'>일기쓰기</NavLink>
        </HeaderSC>
    )
}

export default Header;