import React from "react";
import { HomeSC } from "./HomeSC";
import { IntroSC1, IntroSC2, IntroSC3, IntroSC4 } from "./HomeSC";

const Home : React.FC = () => {
    return(
        <>
            <HomeSC>
                {/* 로그인 상태, 비로그인 상태 별로 출력하는 화면 다르게 예정
                로그인 상태 = 일기 쓰기
                비로그인 상태 = 서비스 소개 */}

                {/* 비로그인 상태 서비스 소개 페이지 */}
                <>
                    <IntroSC1><h1>EEUM : 나와 연결된, 야식 한끼</h1></IntroSC1>
                    <IntroSC2>소개 페이지 2</IntroSC2>
                    <IntroSC3>소개 페이지 3</IntroSC3>
                    <IntroSC4>소개 페이지 4</IntroSC4>
                </>

            </HomeSC>
        </>
    )
}

export default Home;