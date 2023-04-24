import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const HomeSC = styled.div`
    border : 1px solid white;
`

// 소개페이지 styled.div
export const IntroSC1 = styled.div`
    padding : 18rem 0;
    background-Color : #1C0C5B;
    color : white;
    text-align : center;

    & button {
        background-color : #C996CC;
        border-radius : 10px;
        border : none;
        padding : 15px;
        color : #916BBF;
        font-size: 10em;
        text-shadow: 8px 3px 3px #3D2C8D;
        animation: ${rotate} 1.5s linear;

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