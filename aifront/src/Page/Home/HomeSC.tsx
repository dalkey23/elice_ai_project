import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(30deg);
  }
`

export const HomeSC = styled.div`
    border : 1px solid white;
`

// 소개페이지 styled.div
export const IntroSC1 = styled.div`
    padding : 20rem 0;
    background-Color : #1C0C5B;
    color : white;
    text-align : center;

    & h1 {
        font-size: 3em;
        animation: ${rotate} 4s linear infinite;
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