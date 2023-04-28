import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  {
    0% { opacity: 0; filter: blur(10px); }
    100% { opacity: 1; filter: blur(0px); }
  }
`

export const HomeSC = styled.div`
    border : 1px solid white;
`

// 소개페이지 styled.div
export const IntroSC1 = styled.div`
    padding : 8rem 0;
    background-Color : #FFFFFF;
    color : white;
    text-align : center;

    & h1 {
        padding : 3em;
        color : #916BBF;
        text-shadow: 3px 3px 3px #C996CC;
        animation: ${rotate} 1s linear;
    }

    & button {
        background-color : #FFFFFF;
        border-radius : 10px;
        border : none;
        padding : 15px;
        color : #916BBF;
        font-size: 10em;
        text-shadow: 6px 3px 3px #C996CC;
        animation: ${rotate} 1s linear;

        : hover {
            text-shadow: 8px 3px 3px #916BBF;
            background-color : #3D2C8D;
            color : #C996CC;
        }
    }
`

export const IntroSC2 = styled.div`
    padding : 20rem 0;
    background-Color : #3D2C8D;
    color : white;
    text-align : center;
`

export const IntroSC3 = styled.div`
    padding : 20rem 0;
    background-Color : #916BBF;
    color : white;
    text-align : center;
`

export const IntroSC4 = styled.div`
    padding : 20rem 0;
    background-Color : #C996CC;
    color : white;
    text-align : center;
`