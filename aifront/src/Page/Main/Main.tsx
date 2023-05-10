import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../../Component/Header/Header";
import Home from "../Home/Home";
import JournalPost from "../Journal/JournalPost";
import JournalDone from "../Journal/JournalDone";
import JournalCheck from "../Journal/JournalCheck";
import JournalDetail from "../Journal/JournalDetail";
import CommunityList from "../Community/CommunityList";
import JoinUser from "../User/JoinUser";
import CompletedJoin from "../User/CompletedJoin";
import Footer from "../../Component/Footer/Footer";
import PostCommunity from "../Community/PostCommunity";
import Login from "../User/Login";
import CommunityDetail from "../Community/CommunityDetail";
import Mypage from "../User/Mypage";

const Main : React.FC = () => {
    
    return(
        <>
            <Header />
                <Routes>
                    <Route path = '/' element = {<Home />} />
                    <Route path = '/PostCommunity' element = {<PostCommunity/>} />
                    <Route path = '/Login' element = {<Login/>} />
                    <Route path = '/JournalPost' element = {<JournalPost />} />
                    <Route path = '/JournalDone' element = {<JournalDone />} />
                    <Route path = '/JournalDetail/:id' element = {<JournalDetail />} />
                    <Route path = '/JournalCheck' element = {<JournalCheck />} />
                    <Route path = '/CommunityList' element = {<CommunityList/>} />
                    <Route path = '/UserJoin' element = {<JoinUser/>} />
                    <Route path = '/CompletedJoin' element = {<CompletedJoin/>} />
                    <Route path = '/PostCommunity' element = {<PostCommunity/>} />
                    <Route path = '/CommunityDetail/:id' element = {<CommunityDetail/>} />
                    <Route path = '/Mypage' element = {<Mypage/>} />
                </Routes>
            <Footer />
        </>
    )
}

export default Main;