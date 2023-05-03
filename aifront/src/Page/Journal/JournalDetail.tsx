import React from "react";
import { useParams } from "react-router-dom"
import { useJournalDetail } from "../../Component/Hook/Journal.hook";
import { getJournalsDetail } from "../../Component/Api/PostJournal";

const JournalDetail : React.FC = () => {
    const { id } = useParams();
    const { items } = useJournalDetail(Number(id));

    return (
        <div>
            
        </div>
    )
}

export default JournalDetail;