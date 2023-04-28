import React from "react";
import { useNavigate } from "react-router-dom";
import * as SC from "./HomeSC"

const Home : React.FC = () => {
    const navigate = useNavigate();

    return(
        <>
            <SC.Home>
                {/* 로그인 상태, 비로그인 상태 별로 출력하는 화면 다르게 예정
                로그인 상태 = 일기 쓰기
                비로그인 상태 = 서비스 소개 */}

                {/* 비로그인 상태 서비스 소개 페이지 */}
                <>
                    <SC.Intro1><button onClick = {() => {
                        navigate('/JournalPost')
                    }}>EEUM</button>
                    <h1>나와 연결된, 야식 한끼</h1></SC.Intro1>
                    <SC.Intro2><h1>소개 페이지 2</h1></SC.Intro2>
                    <SC.Intro3>소개 페이지 3</SC.Intro3>
                    <SC.Intro4>소개 페이지 4</SC.Intro4>
                </>
            </SC.Home>
        </>
    )
}

export default Home;