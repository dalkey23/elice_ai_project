import styled from "styled-components";

export const LoginContainer = styled.div`
    margin : 50px;
    display : flex;
    flex-direction : column;
`


export const InfoDiv = styled.div`
    margin : 20px auto;
    padding : 10px;
`

export const AddedDiv = styled.div`
    margin : 20px auto;
    padding : 10px;

    & button {
        margin : 20px;
        color : #C996CC;
        font-weight : bold;
        background : none;
        border : none;

    }

`

export const LoginItem = styled.div`
    display : block;

    & input {
        margin: 10px;
        border: solid 1px #3d2c8d;
        width: 400px;
        height: 50px;
    }
    & input::placeholder {
        font-weight : bold;
        color : #3D2C8D;
        text-align : center;
    }
`

export const ButtonDiv = styled.div`
    padding : auto;
    display: flex; 
    justify-content: center;

    
`

export const ConfirmButton = styled.button`
    width: 200px;
    height: 40px;
    background: #3D2C8D;
    text-align: center;
    color: #FFFFFF;
    margin : 10px;

`
