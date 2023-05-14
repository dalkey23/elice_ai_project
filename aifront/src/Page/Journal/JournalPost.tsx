import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'
import { useNavigate } from "react-router-dom";
import * as SC from "./JournalPostSC";
import { useCreateJournal } from "../../Component/Hook/Journal.hook";

const JournalPost : React.FC = () => {
    const  { createJournal, isLoading, isError }  = useCreateJournal();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [publishedDate, setPublishedDate] = useState(new Date());
    const navigate = useNavigate();

    const handleSubmit = async (e : React.MouseEvent) => {
        e.preventDefault();

        await createJournal({
                title : title,
                content : content,
                publishedDate: publishedDate},{
                    onSuccess(res) {
                        console.log(res);
                        alert('작성이 완료 되었습니다!');
                        navigate('/JournalCheck');
                    },
                    onError(err){
                        console.log(err);
                        alert('다시 작성해 주세요.');
                    }})
    }

    return(
        <SC.JournalPostMain>
            <h1>EEUM : 나와 연결된, 일기</h1>
            <SC.TitleDate2>
                <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
                // 오늘 이전 날짜만 선택 가능
                selected={publishedDate}
                onChange={(date : Date) => setPublishedDate(date)} />
            </SC.TitleDate2>
            <SC.TitleDate>
                <input
                autoFocus
                placeholder = "일기 제목을 적어주세요"
                name = "title"
                value = {title}
                onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                } />
            </SC.TitleDate>
            <SC.JournalPost>
                <textarea
                placeholder = "일기를 적어주세요"
                name = "content"
                maxLength = {100}
                value = {content}
                onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) =>
                    setContent(e.target.value)
                } />
            </SC.JournalPost>
            <SC.ButtonDiv>
                <button onClick = {handleSubmit}>일기 작성</button>
            </SC.ButtonDiv>
            {isLoading && <p>로딩중...</p>}
            {isError && <p>에러발생!!</p>}
        </SC.JournalPostMain>
    )
}

export default JournalPost;