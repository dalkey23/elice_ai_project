import React from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useJournalList } from "../../Component/Hook/Journal.hook";
import { useGetLoginedUser } from "../../Component/Hook/User.hook";
import * as SC from "./JournalCheckSC";
import styled from 'styled-components'

const elementsSize = 8;

const SkeletonBox = styled.div`
border: 1px solid #e0e1e3;
border-radius: 8px;
margin: 1em;
width: 35%;
height: 400px;
background-color: #e0e1e3;
`

const SkeletonJournalList = () => {


    return (
        <>
            <SkeletonBox />
            <SkeletonBox />
            <SkeletonBox />
            <SkeletonBox />
        </>
    )
}


const JournalCheck: React.FC = () => {
    //로그인 확인
    const navigate = useNavigate();
    const { isLogined } = useGetLoginedUser();

    if (!isLogined) {
        navigate("/Login");
    }

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get("page") as string) || 1;

    const { journalList, totalPage, isLoading, isFetched } = useJournalList(
        currentPage,
        elementsSize
    );
    console.log(journalList);

    const handlePageUp = () => {
        setSearchParams({ page: `${currentPage + 1}` });
    };

    const handlePageDown = () => {
        setSearchParams({ page: `${currentPage - 1}` });
    };

    return (
        <>
            <SC.JournalList>
                {isLoading && <SkeletonJournalList />}
                {journalList.map((journal) => {
                    return (
                        <SC.Journal>
                            <Link
                                to={`/JournalDetail/${journal.id}`}
                                key={journal.id}>
                                <div>
                                    <h1 key="journalId">
                                        {journal.id}번째 일기
                                    </h1>
                                    <p key="journalDate">
                                        {journal.publishedDate}
                                    </p>
                                    <h2 key="journalEmo">{journal.emotion}</h2>
                                    <h3 key="journalTi">{journal.title}</h3>
                                </div>
                                <h1 key="journalFood">
                                    {journal.recommendedFood}
                                </h1>
                            </Link>
                        </SC.Journal>
                    );
                })}
            </SC.JournalList>
            {isFetched && currentPage > 1 && <SC.Button>
                {currentPage > 1 && (
                    <button onClick={handlePageDown}>이전 페이지</button>
                )}
                {currentPage !== totalPage && (
                    <button onClick={handlePageUp}>다음 페이지</button>
                )}
            </SC.Button>}
        </>
    );
};

export default JournalCheck;
