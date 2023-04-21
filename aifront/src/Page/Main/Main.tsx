import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

// 라우터 분리 전 임시로 라우터 사용
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

const Main : React.FC = () => {
    
    return(
        <>
            <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path = '/' element = {<Home />} />
                    </Routes>
                </BrowserRouter>
            <Footer />
        </>
    )
}

export default Main;