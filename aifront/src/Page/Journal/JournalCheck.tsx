import React, { useEffect } from "react";
import { getJournals } from "../../Component/Api/PostJournal";
import { useJournalList } from "../../Component/Hook/Journal.hook";

const JournalCheck : React.FC = () => {

    const GetJournal = async () => {
    try {
        const res = await getJournals()
        console.log(res);
    } catch(err) {
        console.log(err);
    };
    }

    useEffect(() => {
        GetJournal();
    },[]);

    return(
        <div>
            
        </div>
    )
}

export default JournalCheck;