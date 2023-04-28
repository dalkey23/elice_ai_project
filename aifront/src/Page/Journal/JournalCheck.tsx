import React from "react";
import { getJournals } from "../../Component/Api/PostJournal";
import { useJournalList } from "../../Component/Hook/Journal.hook";

const JournalCheck : React.FC = () => {
    
    const MyJournal = async () => {
    try {
        const res = await getJournals()
        console.log(res);
    } catch(err) {
        console.log(err);
    };
    }
    
    MyJournal();

    return(
        <div>
            res
        </div>
    )
}

export default JournalCheck;