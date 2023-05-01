import React, { useEffect, useState } from "react";
import { useJournalList } from "../../Component/Hook/Journal.hook";
import { getJournals } from "../../Component/Api/PostJournal";

const JournalCheck : React.FC = () => {
    // const [journal, setJournal] = useState();

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
            {/* {journal} */}
        </div>
    )
}

export default JournalCheck;