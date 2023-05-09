import React from "react";
import { useParams } from "react-router-dom"
import { useJournalDetail } from "../../Component/Hook/Journal.hook";
import * as SC from "./JournalDetailSC"

const JournalDetail : React.FC = () => {
    const { id } = useParams();
    const { item } = useJournalDetail(Number(id));
    console.log(item.id)
    
    return (
        <SC.JournalDetail>
            {item.id}
            {item.content}
        </SC.JournalDetail>
    )
}

export default JournalDetail;