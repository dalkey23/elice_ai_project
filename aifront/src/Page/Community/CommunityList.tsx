import React, { useState, ReactNode, useEffect } from "react";
import axios from "axios";
import * as SC from "./CommunityListSC";
import { Pagination } from "../../Component/Base/Pagination";
import { BoardModel } from "../../Types/Community.type";
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
    posts: BoardModel["items"][];
}

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

const elementsSize = 10;

const CommunityList: React.FC = () => {
   const navigate = useNavigate();
   const [posts, setPosts] = useState<BoardModel["items"][]>();
   const [searchParams, setSearchParams] = useSearchParams();

   const currentPage = parseInt(searchParams.get('page') as string) || 1;
   const { communityList, totalPage } = useCommunityList(currentPage, elementsSize);
   for (const value of Object.values(communityList)) {
    console.log(value)
   }
   
//    useEffect(() => {
//     setPosts(communityList)
//    }, [])

   const handlePageUp = () => {
    setSearchParams({ pages: `${currentPage + 1}`})
   }

   const handlePageDown = () => {
    setSearchParams({ page: `${currentPage - 1}`})
   }

    return (
        <SC.CommunityListMain>
            <h1>커뮤니티</h1>
            <br/>
            <CommunityListTable tableHeadData={tableHeadData} posts = {posts!}>
                {posts &&
                    posts!.map((item) => {
                        return (
                            <tr key={item.id}>
                            <td>
                                <SC.BulletPoint text={item.category} />
                            </td>
                            <td>
                                <Link to = {`/CommunityDetail/${item.id}`}>{item.title} ({item.comments})</Link></td>
                            <td>{item.createdAt}</td>
                            <td>{item.writer}</td>
                            <td>{item.views}</td>
                            </tr>
                            
                        );
                    })}
            </CommunityListTable>
            <SC.ButtonDiv>
                <button onClick={() => {
                    navigate('/PostCommunity')
                }}>글쓰기</button>
            </SC.ButtonDiv>
        </SC.CommunityListMain>
    );
};

export default CommunityList;
