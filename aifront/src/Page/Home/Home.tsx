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
                    <SC.Intro1></SC.Intro1>
                    <SC.Intro2>
                        <h1>나와 연결된, 야식 한끼</h1>
                        <h2>오늘 하루 일기를 써보세요. AI가 당신의 감정을 읽고 오늘의 야식을 추천해 드립니다.</h2>
                    </SC.Intro2>
                    <SC.Intro3><h1>나와 연결된, 다른 사람들</h1></SC.Intro3>
                    <SC.Intro4></SC.Intro4>
                </>
            </SC.Home>
        </>
    )
}

export default Home;