import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../../Component/Header/Header";
import Home from "../Home/Home";
import JournalPost from "../Journal/JournalPost";
import JournalCheck from "../Journal/JournalCheck";
import JournalDetail from "../Journal/JournalDetail";
import CommunityList from "../Community/CommunityList";
import JoinUser from "../User/JoinUser";
import CompletedJoin from "../User/CompletedJoin";
import Footer from "../../Component/Footer/Footer";
import PostCommunity from "../Community/PostCommunity";
import CommunityDetail from "../Community/CommunityDetail";
import EditCommunity from "../Community/EditCommunity";
import Myinfo from "../User/Myinfo";
import Mypage from "../User/Mypage";
import Login from "../User/Login";
import DeletedUser from '../User/DeletedUser'

const Main : React.FC = () => {
    
    return(
        <>
            <Header />
                <Routes>
                    <Route path = '/' element = {<Home />} />
                    <Route path = '/JournalPost' element = {<JournalPost />} />
                    <Route path = '/JournalDetail/:id' element = {<JournalDetail />} />
                    <Route path = '/JournalCheck' element = {<JournalCheck />} />
                    <Route path = '/CommunityList' element = {<CommunityList/>} />
                    <Route path = '/UserJoin' element = {<JoinUser/>} />
                    <Route path = '/CompletedJoin' element = {<CompletedJoin/>} />
                    <Route path = '/PostCommunity' element = {<PostCommunity/>} />
                    <Route path = '/CommunityDetail/:id' element = {<CommunityDetail/>} />
                    <Route path = '/EditCommunity/:id' element = {<EditCommunity/>} />
                    <Route path = '/Mypage' element = {<Mypage/>} />
                    <Route path = '/Myinfo' element = {<Myinfo/>} />
                    <Route path = '/Login' element = {<Login/>} />

                    <Route path = '/DeletedUser' element = {<DeletedUser/>} />
                </Routes>
            <Footer />
        </>
    )
}

export default Main;