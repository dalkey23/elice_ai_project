import styled from "styled-components";

export const JouranlDetailMain = styled.div`

    text-align : center;
    padding : 2em;

    & h1 {
        margin : 1em;
    }

    & h2 {
        margin : 0.5em;
        font-size : 1.5em;
    }

    & h3 {
        margin : 1em;
        }

    & h4 {
        font-size : 3em;
    }

    & button {
        padding : 1em;
        width : 10%;
        color : white;
        background-color : #916BBF;
        border : 1px solid white;
        border-Radius : 10px;
        : hover {
            background-color : #C996CC;
        }
    }
`

export const JournalDetail = styled.div`
    display : flex;
    justify-content : center;

    & div {
        border : 1px solid black;
        border-radius : 8px;
        width : 30%;
        text-align : center;
        margin : 1rem;
        padding : 15rem;
    }
`
