import styled from 'styled-components';

export const CommunityDetailMain = styled.div`
    padding: 100px;

    & h1 {
        display: flex;
        justify-content: center;
        margin: 1em;
        font-size : 2em;
        font-weight : bold;
        color: #3d2c8d;
    }

    & h3 {
        display: flex;
        justify-content: center;
        margin: 1em;
        font-size : 14px;
        font-weight : bold;
        color: #3d2c8d;
    }
`;

export const StyledBulletPoint = styled.div`
    background-color: #c996cc;
    border-radius: 20px;
    width: 50px;
    padding: 11px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
`;

export const TitleItem = styled.div`
    margin: 0 auto;
`

export const CommunityDetailTitle1 = styled.div`
    width: 80%;
    display: flex;
    padding: 20px;
    margin: 0 auto;
    & div {
        padding: 10px 10px;
        font-weight: bold;
        font-size: 14px;
        align-items: center;
    }
`;

export const CommunityDetailTitle2 = styled.div`
    width: 80%;
    display: flex;
    padding: 0 0 0 30px;
    margin: 0 auto;
    justify-content: flex-end;

    & div {
        padding: 10px 10px;
        font-weight: bold;
        font-size: 14px;
    }
`;

export const CommunityDetailContent = styled.div`
    width: 80%;
    display: flex;
    padding: 20px;
    margin: 0 auto;
    justfy-content: center;
    background: rgba(201, 150, 204, 0.5);
`;

export const ButtonDiv = styled.div`
    width: 80%;
    display: flex;
    padding: 0 0 0 30px;
    margin: 0 auto;
    justify-content: flex-end;

    & button {
        padding: 10px;
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

export const CommunityCommentTitle = styled.div`
    width: 80%;
    display: flex;
    padding: 20px 20px 20px 0px;
    margin: 0 auto;
    & h3 {
        justify-content: left;
    };
`;

export const CommunityCommentMain = styled.div`
    width: 80%;
    display: flex;
    padding: 0px 20px;
    margin: 0 auto;
    justfy-content: center;
    background: rgba(201, 150, 204, 0.5);
    //vertical-align: middle;
    & h4 {
        width: 15%;
        padding: 10px;
        margin: 5px;
        text-align: center;
        display: inline;
        vertical-align: middle;
        font-weight : bold;
        border: 1px solid green;
    };
    & p {
        width: 75%;
        padding: 10px;
        margin: 5px;
        display: inline;
        vertical-align: middle;
        border: 1px solid green;
    };
    & button {
        width: 5%;
        padding: 10px;
        margin: 5px;
        text-align: center;
        display: inline;
        vertical-align: middle;
        border: 1px solid green;
    };
`;