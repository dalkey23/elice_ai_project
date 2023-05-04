import styled from "styled-components";

export const JoinContainer = styled.div`
    // padding : 50px;
    margin : 50px;
    display : flex;
    flex-direction : column;
`



export const JoinItem = styled.div`
    display : block
    & label {
        margin: 10px;
        color: #3d2c8d;
    }
    & input {
        margin: 10px;
        border: solid 1px #3d2c8d;
        width: 300px;
        height: 30px;
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
    width: 100px;
    height: 33px;
    
    background: #3D2C8D;
    border-radius: 10px;

    text-align: center;
    color: #FFFFFF;

    margin : 10px;

`
