import React from "react";
import { useParams } from "react-router-dom"
import { useJournalDetail } from "../../Component/Hook/Journal.hook";
import { getJournalDelete } from "../../Component/Api/PostJournal";
import * as SC from "./JournalDetailSC"

const JournalDetail : React.FC = () => {
    const { id } = useParams();
    const { item } = useJournalDetail(Number(id));

    if (!item) {
        return <></>
    }

    const handleDelete = async (e : React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await getJournalDelete(Number(id));
            console.log(res)
            alert('일기가 삭제 되었습니다.');
            window.location.href='/JournalCheck';
        } catch(err) {
            console.log(err);
            alert('다시 시도해 주세요.');
        }
    }

    return (
        <SC.JouranlDetailMain>
                <h1>{item.diary.id}번째 일기</h1>
                <h2>{item.diary.publishedDate}</h2>
                <h3>{item.diary.title}</h3>
            <SC.JournalDetail>
                <div>
                    <h1>{item.diary.content}</h1>
                    <h2>{item.diary.recommendedFood}</h2>
                </div>
            </SC.JournalDetail>
            <button onClick = {handleDelete}>일기 삭제</button>
        </SC.JouranlDetailMain>
    )
}

export default JournalDetail;