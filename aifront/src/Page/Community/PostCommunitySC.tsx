import styled from "styled-components";

export const PostCommunityMain = styled.div`
    padding: 100px;

    & h1 {
        display : flex;
        justify-Content : center;
        margin : 1em;
        font-size : 2em;
        font-weight : bold;
        color: #3d2c8d;
    }

    & p {
        text-align : center;
    }

    & input {
        padding : 1em;
        margin : 1em;
        width : 20%
    }
`

export const TitleDate = styled.div`
    width : 100%;
    // display : flex;
    // justify-Content : center;
`

export const PostCommunity = styled.div`
    // display : flex;
    // justify-Content : center;
    padding : 100px;

    & textarea {
        width : 100%;
        height : 20rem;
        border : 1px solid #3D2C8D;
        border-radius : 10px;
        text-align : center;
        font-size : 1.5em;
        ::placeholder {
            padding : 9rem;
        }
    }
`

export const ButtonDiv = styled.div`
    display : flex;
    justify-Content : center;

    & button {
        margin : 2em;
        padding : 1em;
        width : 20%;
        color : white;
        background-color : #916BBF;
        border : 1px solid white;
        border-Radius : 10px;
        : hover {
            background-color : #C996CC;
        }
    }
`