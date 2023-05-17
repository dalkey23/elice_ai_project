import React, { useState, ReactNode, useEffect } from "react";
import * as SC from "./CommunityListSC";
import { Board } from "../../Types/Community.type";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useCommunityList } from "../../Component/Hook/Community.hook";

const tableHeadData = [
  { id: 0, head: "글머리" },
  { id: 1, head: "제목 (댓글 수)" },
  { id: 2, head: "날짜" },
  { id: 3, head: "작성자" },
  { id: 4, head: "조회수" },
];

interface TableProps {
    children: ReactNode;
    tableHeadData?: {
        id: number;
        head: string;
    }[];
    posts: Board[];
}

interface BulletPointProps {
    text: string;
}

const BulletPoint = ({ text }: BulletPointProps) => {
    return <SC.StyledBulletPoint>{text}</SC.StyledBulletPoint>;
};

const CommunityListTable = ({ children, tableHeadData, posts }: TableProps) => {
    return (
        <SC.ListTable>
            {tableHeadData && (
                <SC.TableHead>
                    <tr>
                        {tableHeadData.map((item, index) => (
                            <th key={index}>{item.head}</th>
                        ))}
                    </tr>
                </SC.TableHead>
            )}
            <SC.TableBody>
                {children}
                {posts && posts.length === 0 && (
                    <tr>
                        <td colSpan={99}>게시글이 없습니다.</td>
                    </tr>
                )}
            </SC.TableBody>
        </SC.ListTable>
    );
};


const CommunityList: React.FC = () => {
   const navigate = useNavigate();
   const elementsSize = 10;
   const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = parseInt(searchParams.get('page') as string) || 1;
   const { communityList, totalPage, isLoading } = useCommunityList(currentPage, elementsSize);

   const handlePageUp = () => {
    setSearchParams({ page: `${currentPage + 1}`})
   }

   const handlePageDown = () => {
    setSearchParams({ page: `${currentPage - 1}`})
   }

    return (
        <SC.CommunityListMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.ButtonDiv>
                <button onClick={() => {
                    navigate('/PostCommunity')
                }}>글쓰기</button>
            </SC.ButtonDiv>
            {isLoading && <></>}
            <CommunityListTable tableHeadData={tableHeadData} posts = {communityList}>
                {isLoading && <p>Loading</p>}
                {communityList &&
                    communityList!.map((item) => {
                        return (
                            <tr key={item.id}>
                            <td>
                                <BulletPoint text={item.category} />
                            </td>
                            <td>
                                <Link to = {`/CommunityDetail/${item.id}`} style={{ textDecoration: 'none' }}>{item.title} ({item.commentCount})</Link></td>
                            <td>{item.createdAt.slice(0, 10)} {item.createdAt.slice(11, 19)}</td>
                            <td>{item.authorName}</td>
                            <td>{item.views}</td>
                            </tr>
                        );
                    })}
            </CommunityListTable>
            <SC.Button>
                {currentPage > 1 && <button onClick={handlePageDown}>이전 페이지</button>}
                {currentPage !== totalPage && <button onClick={handlePageUp}>다음 페이지</button>}
            </SC.Button>
        </SC.CommunityListMain>
    );
};

export default CommunityList;