import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useJournalList } from '../../Component/Hook/Journal.hook'
import * as SC from "./JournalCheckSC"

const elementsSize = 8;

const JournalCheck : React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') as string) || 1

    const {journalList, totalPage} = useJournalList(currentPage, elementsSize)

    const handlePageUp = () => {
        setSearchParams({page: `${currentPage + 1}`})
    }

    const handlePageDown = () => {
        setSearchParams({page: `${currentPage - 1}`})
    }

    return(
        <>
        <SC.JournalList>
            {journalList.map(j => {
                return (
                <SC.Journal>
                    <Link to={`/JournalDetail/${j.id}`} key={j.id}>
                        <div>
                            <h1>{j.id}번째 일기</h1>
                            <p>{j.publishedDate}</p>
                            <p>{j.diaryEmotion}</p>
                            <h2>{j.title}</h2>
                        </div>
                            <h1>{j.recommendedFood}</h1>
                    </Link>
                </SC.Journal>
                )
            })}
        </SC.JournalList>
            <SC.Button>
                {currentPage > 1 && <button onClick={handlePageDown}>이전 페이지</button>}
                {currentPage !== totalPage && <button onClick={handlePageUp}>다음 페이지</button>}
            </SC.Button>
        </>
    )
}

export default JournalCheck;