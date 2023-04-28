import React, { useState, ReactNode } from "react";
import axios from "axios";
import * as SC from "./CommunityListSC";
import { BoardModel } from "../../Types/Community.type";

const tableHeadData = [
    { id: 0, head: "글머리" },
    { id: 1, head: "제목" },
    { id: 2, head: "날짜" },
    { id: 3, head: "작성자" },
    { id: 4, head: "조회수" },
];

const data = [
  {
    "id": 1,
    "category": "맛집",
    "title": "제목",
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 2,
    "category": "레시피",
    "title": "제목",
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
]

interface TableProps {
    children: ReactNode;
    tableHeadData?: {
        id: number;
        head: string;
    }[];
    posts: BoardModel[];
}

const Table = ({ children, tableHeadData, posts }: TableProps) => {
    return (
        <SC.StyledTable>
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
        </SC.StyledTable>
    );
};

const CommunityList: React.FC = () => {
   const [posts, setPosts] = useState<BoardModel[]>(data);


    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <SC.CommunityListMain>
            <h1>커뮤니티</h1>
            <SC.CommunityListTable>
                <tr>
                    <td>글머리</td>
                    <td>제목</td>
                    <td>날짜</td>
                    <td>작성자</td>
                    <td>조회수</td>
                </tr>
            </SC.CommunityListTable>
            <Table tableHeadData={tableHeadData} posts={posts!}>
                {posts &&
                    posts!.map((item, index) => {
                        return (
                            <tr
                                key={item.id}
                                onClick={() => {
                                    //router.push(`/found/${item.id}`);
                                }}
                            >
                                <td>
                                    <SC.CategoryBadge text={item.category} />
                                </td>
                                <td width="400">{item.title} (0)</td>
                                <td>{item.createdAt}</td>
                                <td>{item.writer}</td>
                                <td>{item.views}</td>
                            </tr>
                        );
                    })}
            </Table>

            <SC.ButtonDiv>
                <button onClick={handleSubmit}>글쓰기</button>
            </SC.ButtonDiv>
        </SC.CommunityListMain>
    );
};

export default CommunityList;
