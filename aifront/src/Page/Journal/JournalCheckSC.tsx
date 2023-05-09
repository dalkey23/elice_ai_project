import styled from "styled-components";

export const JournalList = styled.div`
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
`

export const Journal = styled.div`
    border : 1px solid black;
    border-radius : 8px;
    margin : 1em;
    width : 35%;
    height : 400px;

    & a {
        text-decoration : none;
        color : black;
        & div {
            padding : 1em;
            text-align : center;
            border-bottom : 1px solid black;
            & h1 {
                font-size : 2em;
                margin : 0.5em;
            }
        }
    }
`

export const Button = styled.div`
    display : flex;
    justify-content : center;
    padding : 2em;

    & button {
        background-color : #C996CC;
        border : none;
        padding : 1.5em;
        margin : 1em;
        border-radius : 8px;
        : hover {
            color : white;
            background-color : #916BBF;
        }
    }
`