import React from "react";
import { useParams } from "react-router-dom"
import { useJournalDetail } from "../../Component/Hook/Journal.hook";

const JournalDetail : React.FC = () => {
    const { id } = useParams();
    const { item } = useJournalDetail(Number(id));
    console.log(item.id)
    
    return (
        <div>
            {item.id}
        </div>
    )
}

export default JournalDetail;