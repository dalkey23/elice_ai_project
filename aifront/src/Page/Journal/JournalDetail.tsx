import React from "react";
import { useParams } from "react-router-dom"
import { useJournalDetail } from "../../Component/Hook/Journal.hook";

const JournalDetail : React.FC = () => {
    const { id } = useParams();
    const { item } = useJournalDetail(Number(id));
    
    return (
        <div>
            {item.}
        </div>
    )
}

export default JournalDetail;