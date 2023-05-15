import React, { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useJournalList } from '../../Component/Hook/Journal.hook'
import * as SC from "./JournalCheckSC"
import { range, chunk } from "../../Utils/common";

const elementsSize = 8;
const pagePerScreen = 10

const JournalCheck : React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') as string) || 1

    const {journalList, totalPage} = useJournalList(currentPage, elementsSize)


    const screenPages = useMemo(() => {
        if (!totalPage) return []

        return chunk(range(1, totalPage), pagePerScreen)
    }, [totalPage])

    const currentScreenPageIndex = useMemo(() => {
        return screenPages.findIndex(pages => {
            return pages.includes(currentPage)
        })
    }, [screenPages, currentPage])

    const handlePageUp = () => {
        setSearchParams({page: `${currentPage + 1}`})
    }

    const handlePageDown = () => {
        setSearchParams({page: `${currentPage - 1}`})
    }

    const handlePageMove = (newPage: number) => {
        setSearchParams({page: `${newPage}`})
    }

    return(
        <>
        <SC.JournalList>
            {journalList.map(journal => {
                return (
                <SC.Journal>
                    <Link to={`/JournalDetail/${journal.id}`} key={journal.id}>
                        <div>
                            <h1 key = "journalId">{journal.id}번째 일기</h1>
                            <p key = "journalDate">{journal.publishedDate}</p>
                            <h2 key = "journalEmo">{journal.emotion}</h2>
                            <h3 key = "journalTi">{journal.title}</h3>
                        </div>
                            <h1 key = "journalFood">{journal.recommendedFood}</h1>
                    </Link>
                </SC.Journal>
                )
            })}
        </SC.JournalList>
            <SC.Button>
                {currentPage > 1 && <button onClick={handlePageDown}>이전 페이지</button>}
                {screenPages.length ? screenPages[currentScreenPageIndex].map(page => {
                    return <button style={{backgroundColor: page === currentPage ? '#8ab787' : undefined}} onClick={() => {handlePageMove(page)}}>{page}</button>
                }) : <></>}
                {currentPage !== totalPage && <button onClick={handlePageUp}>다음 페이지</button>}
            </SC.Button>
        </>
    )
}

export default JournalCheck;