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
`

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

interface BulletPointProps {
    text: string;
}

export const BulletPoint = ({ text }: BulletPointProps) => {
    return <StyledBulletPoint>{text}</StyledBulletPoint>;
};

export const CommunityDetailTitle = styled.div``

export const CommunityDetailContent = styled.div``