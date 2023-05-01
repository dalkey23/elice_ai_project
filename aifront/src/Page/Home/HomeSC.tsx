import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  {
    0% {  color : #C996CC}
    20% { color : #916BBF}
    35% { color : #3D2C8D}
    50% { color : #1C0C5B}
    65% { color : #3D2C8D}
    80% { color : #916BBF}
    100% { color : #C996CC}
  }
`

export const Home = styled.div`
    border : 1px solid white;
`

// 소개페이지 styled.div
// 이미지 안올라감..
export const Intro1 = styled.div`
    background-image : url('Img/Main.jpg');
    background-size : 120%;
    background-position : center;
    padding : 15rem 0;
    text-align : center;

    & h1 {
        font-size : 12em;
        color : #916BBF;
        text-shadow: 6px 6px 6px black;
        animation: ${rotate} 5s linear infinite;
    }

    & h2 {
        margin : 1em;
        color : white;
        text-shadow: 3px 3px 3px black;
        font-size: 2em;
    }
    }
`

export const Intro2 = styled.div`
    padding : 20rem 0;
    background-Color : #3D2C8D;
    color : white;
    text-align : center;
`

export const Intro3 = styled.div`
    padding : 20rem 0;
    background-image : url('Img/Community.jpg');
    background-size : 120%;
    background-position : center;
    color : white;
    text-align : center;

    & h1 {
        font-size : 6em;
    }
`

export const Intro4 = styled.div`
    padding : 20rem 0;
    background-Color : #C996CC;
    color : white;
    text-align : center;
`