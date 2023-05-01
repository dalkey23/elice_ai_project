import React, { useState, ReactNode } from "react";
import axios from "axios";
import * as SC from "./CommunityListSC";
import { Pagination } from "../../Component/Base/Pagination";
import { BoardModel } from "../../Types/Community.type";
import { useNavigate } from "react-router-dom";

// import { Route } from "react-router-dom";

const tableHeadData = [
    { id: 0, head: "글머리" },
    { id: 1, head: "제목 (댓글 수)" },
    { id: 2, head: "날짜" },
    { id: 3, head: "작성자" },
    { id: 4, head: "조회수" },
];

// test 데이터
const data = [
  {
    "id": 1,
    "category": "맛집",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 2,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 3,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 4,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 5,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 6,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 7,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 8,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 9,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 10,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
    "content": "내용",
    "writer": "가나다",
    "views": 30,
    "createdAt": "2023-04-11T23:11:12:037"
  },
  {
    "id": 11,
    "category": "레시피",
    "title": "제목",
    "comments": 5,
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
   const [posts, setPosts] = useState<BoardModel[]>(data);
   const [page, setPage] = useState(1);

//    const pageList: number[] = [];
//    if (posts?.totalPages) {
//      for (let i = 1; i <= items!.totalPages; i++) {
//        pageList.push(i);
//      }
//    }
 
//    const paginate = (num: number) => {
//      setPage(num);
//    };

    return (
        <SC.CommunityListMain>
            <h1>커뮤니티</h1>
            <br/>
            <CommunityListTable tableHeadData={tableHeadData} posts={posts!}>
                {posts &&
                    posts!.map((item, index) => {
                        return (
                            <tr
                                key={item.id}
                                onClick={() => {
                                    // <Route path = '/posts/${item.id}' element = {<Home />} />
                                }}
                            >
                                <td>
                                    <SC.BulletPoint text={item.category} />
                                </td>
                                <td>{item.title} ({item.comments})</td>
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

            {/* <Pagination totalPages = {Math.ceil(posts.length/10)}
                        totalPosts = {posts.length}
                        page: currentPage,
                        paginate,
                        pageList> */}
        </SC.CommunityListMain>
    );
};

export default CommunityList;
