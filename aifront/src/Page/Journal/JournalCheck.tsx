import React from "react";
import { useSearchParams } from "react-router-dom";
import { useJournalList } from '../../Component/Hook/Journal.hook'

const elementsSize = 4;

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
        <div>
            <div>
                {currentPage !== totalPage && <button onClick={handlePageUp}>page up</button>}
                {currentPage > 1 && <button onClick={handlePageDown}>page down</button>}
            </div>
            {journalList.map(j => {
                return <div key={j.id} style={{padding: '5px 10px', border: '1px solid black'}}>
                    <p>id: {j.id}</p>
                    <p>{j.title}</p>
                </div>
            })}
        </div>
    )
}

export default JournalCheck;