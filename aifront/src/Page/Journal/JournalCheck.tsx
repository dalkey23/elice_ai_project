import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getJournals } from "../../Component/Api/PostJournal";
import { Journal } from "../../Types/JournalPost.type";

const elementsSize = 4;

const JournalCheck : React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [journals, setJournals] = useState<Journal[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0)

    console.log('page : ', searchParams.get('page'))

    const currentPage = parseInt(searchParams.get('page') as string)


    const GetJournal = async (page: number) => {
    try {
        const {data} = await getJournals(page, elementsSize)

        console.log(data);
        setJournals(data.items)

        setTotalPage(data.totalPages)
    } catch(err) {
        console.log(err);
    };
    }

    useEffect(() => {
        GetJournal(currentPage);
    },[currentPage]);

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
            {journals.map(j => {
                return <div key={j.id} style={{padding: '5px 10px', border: '1px solid black'}}>
                    <p>id: {j.id}</p>
                    <p>{j.title}</p>
                </div>
            })}
        </div>
    )
}

export default JournalCheck;