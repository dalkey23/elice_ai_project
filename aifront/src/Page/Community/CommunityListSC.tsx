import styled from "styled-components";

export const ListTable = styled.table`
    width: 100%;
    font-size: 16px;
    margin-bottom: 40px;
`;

export const TableHead = styled.thead`
    background-color: #916bbf;
    border: 1px solid #ffffff;
    border-width: 1px 0px;

    th {
        padding: 24px 32px;
        font-weight: bold;
        color: #ffffff;
    }
`;

export const TableBody = styled.tbody`
    tr {
        font-weight: 400;
        color: #000000;
        cursor: pointer;

        td {
            padding: 24px 32px;
            text-align: center;
            vertical-align: middle;
        }
    }

    tr:hover {
        background-color: rgba(145, 107, 191, 0.1);
        font-color: #000000;
    }
`;

interface BulletPointProps {
    text: string;
}

const StyledBulletPoint = styled.div`
    background-color: #c996cc;
    border-radius: 20px;
    width: 50px;
    padding: 11px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    margin: auto;
`;

export const BulletPoint = ({ text }: BulletPointProps) => {
    return <StyledBulletPoint>{text}</StyledBulletPoint>;
};

export const CommunityListMain = styled.div`
    padding: 100px;

    & h1 {
        display: flex;
        justify-content: center;
        margin: 1em;
        font-size : 2em;
        font-weight : bold;
        color: #3d2c8d;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: right;
    padding: 1em;

    & button {
        margin: 2em;
        padding: 1em;
        width: 7%;
        color: white;
        background-color: #916bbf;
        border: 1px solid white;
        border-radius: 10px;
        :hover  {
            background-color: #c996cc;
        }
    }
`;

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