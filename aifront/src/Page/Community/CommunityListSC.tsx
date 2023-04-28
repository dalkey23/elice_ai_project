import styled from "styled-components";

const colors = {
    gray1: "#212428",
    gray1WithOpacity20: "#212428B3",
    gray2: "#62676c",
    gray3: "#8b8d90",
    gray4: "#b1b3b6",
    gray5: "#e2e2e2",
    gray6: "#efefef",
    gray7: "#f9f9f9",
    white: "#ffffff",
    primary1: "#fdf301",
    primary1WithOpacity20: "#fdf30120",
    primary2: "#ede300",
    primary3: "#5b5800",
    systemError: "#e45c49",
    systemSuccess: "#74d900",
};

export const StyledTable = styled.table`
    width: 100%;
    font-size: 16px;
    margin-bottom: 40px;
`;

export const TableHead = styled.thead`
    background-color: ${colors.gray7};
    border: 1px solid ${colors.gray2};
    border-width: 1px 0px;

    th {
        padding: 24px 32px;
        font-weight: 600;
        color: ${colors.gray2};
    }
`;

export const TableBody = styled.tbody`
    tr:nth-of-type(1) {
        border-top: 1px solid ${colors.gray5};
    }
    tr {
        border-bottom: 1px solid ${colors.gray5};
        font-weight: 400;
        color: ${colors.gray3};
        cursor: pointer;

        td {
            padding: 24px 32px;
            text-align: center;
            vertical-align: middle;
        }
    }

    tr:hover {
        background-color: ${colors.gray7};
        color: ${colors.gray1};
    }
`;

interface CategoryBadgeProps {
    text: string;
}

export const CategoryBadge = ({ text }: CategoryBadgeProps) => {
    return <StyledBadge>{text}</StyledBadge>;
};

const StyledBadge = styled.div`
    background-color: ${colors.primary1WithOpacity20};
    border: 1px solid ${colors.primary1};
    border-radius: 40px;
    width: 88px;
    padding: 11px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${colors.primary3};
`;

export const CommunityListMain = styled.div`
    padding: 100px;

    & h1 {
        display: flex;
        justify-content: center;
        margin: 1em;
        color: #3d2c8d;
    }
`;

export const CommunityListTable = styled.div``;

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
