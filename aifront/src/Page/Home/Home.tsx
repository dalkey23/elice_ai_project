import React from "react";
import * as SC from "./HomeSC"

const Home : React.FC = () => {

    return(
        <>
            <SC.Home>
                {/* 로그인 상태, 비로그인 상태 별로 출력하는 화면 다르게 예정
                로그인 상태 = 일기 쓰기
                비로그인 상태 = 서비스 소개 */}

                {/* 비로그인 상태 서비스 소개 페이지 */}
                <>
                    <SC.Intro1>
                    <h1>EEUM</h1>
                    <h2>나와 연결된, 야식 한끼</h2>
                    </SC.Intro1>
                    <SC.Intro2></SC.Intro2>
                    <SC.Intro3><h1>나와 연결된, 다른 사람들</h1></SC.Intro3>
                    <SC.Intro4>소개 페이지 4</SC.Intro4>
                </>
            </SC.Home>
        </>
    )
}

export default Home;