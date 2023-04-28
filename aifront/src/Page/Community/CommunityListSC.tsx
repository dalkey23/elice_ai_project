import styled from "styled-components";

export const CommunityListMain = styled.div`
    & h1 {
        display : flex;
        justify-Content : center;
        margin : 1em;
        color : #3D2C8D;
    }
`

export const ButtonDiv = styled.div`
    display : flex;
    justify-Content : right;
    padding : 1em;

    & button {
        margin : 2em;
        padding : 1em;
        width : 7%;
        color : white;
        background-color : #916BBF;
        border : 1px solid white;
        border-Radius : 10px;
        : hover {
            background-color : #C996CC;
        }
    }
`