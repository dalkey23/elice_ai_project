import React, { useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useJournalList } from "../../Component/Hook/Journal.hook";
import { useGetLoginedUser } from "../../Component/Hook/User.hook";
import * as SC from "./JournalCheckSC";

const elementsSize = 8;

const JournalCheck: React.FC = () => {
    //로그인 확인
    const navigate = useNavigate();
    const { isLogined } = useGetLoginedUser();

    useEffect(()=>{
        if (!isLogined) {
            navigate("/Login");
        }
    },[isLogined])

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get("page") as string) || 1;

    const { journalList, totalPage } = useJournalList(
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
            <SC.Button>
                {currentPage > 1 && (
                    <button onClick={handlePageDown}>이전 페이지</button>
                )}
                {currentPage !== totalPage && (
                    <button onClick={handlePageUp}>다음 페이지</button>
                )}
            </SC.Button>
        </>
    );
};

export default JournalCheck;
