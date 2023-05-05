import styled from "styled-components";

export const JoinContainer = styled.div`
    margin: 50px;
`;

export const JoinDiv1 = styled.div`
    width: 900px;
    background: rgba(201, 150, 204, 0.5);
    margin: 20px auto;
    padding: 30px;
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
`;

export const JoinDiv2 = styled.div`
    width: 900px;
    background: rgba(201, 150, 204, 0.5);
    margin: 20px auto;
    padding: 30px;
    & label {
        margin: 10px;
        color: #3d2c8d;
    }
    & input {
        margin: 10px;
        border: solid 1px #3d2c8d;
        width: 200px;
        height: 30px;
    }
`;

export const JoinItem = styled.div`
    display: block;
    & label {
        margin: 10px;
    }
`;

export const ButtonDiv = styled.div`
    padding: auto;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled.button`
    width: 96px;
    height: 33px;

    background: #3d2c8d;
    border-radius: 10px;

    text-align: center;
    color: #ffffff;

    margin: 10px;
`;

export const CancelButton = styled.button`
    width: 96px;
    height: 33px;
    background: #ffffff;
    border: 1px solid #3d2c8d;
    border-radius: 10px;
    margin: 10px;
`;
