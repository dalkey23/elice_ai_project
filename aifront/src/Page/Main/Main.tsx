import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

// 라우터 분리 전 임시로 라우터 사용
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import JournalPost from "../Journal/JournalPost";
import UserJoin from "../User/UserJoin";

const Main : React.FC = () => {
    
    return(
        <>
            <Header />
                <Routes>
                    <Route path = '/' element = {<Home />} />
                    <Route path = '/JournalPost' element = {<JournalPost />} />
                    <Route path = '/UserJoin' element = {<UserJoin />} />
                </Routes>
            <Footer />
        </>
    )
}

export default Main;