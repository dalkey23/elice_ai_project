import React, { useState } from "react";
import axios from "axios";
import { JournalSubmit } from "../../Types/Form.type";
import { JournalRequest, JournalResponse } from "../../Types/journal.type";
import { JournalPostMain, JournalPostSC, ButtonDiv } from "./JournalPostSC";

const JournalPost : React.FC = () => {
    
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit = async ({ onSubmit } : JournalSubmit) => {

        const form = {
            content, title, publishedDate
        }

        try {
            const res = await axios.post<JournalRequest>('http://localhost:3500/api/diaries', {...form});
            alert('작성이 완료 되었습니다!');
            return res;
        } catch(err) {
            console.log(err);
            alert('다시 작성해 주세요.');
        }


    console.log(title);
    console.log(content);

    }
    return(
        <JournalPostMain>
            <h1>EEUM : 나와 연결된, 일기</h1>
            <JournalPostSC>
                <input
                autoFocus
                placeholder = "일기 제목을 적어주세요"
                name = "title"
                value = {title}
                onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                } />
                <textarea
                placeholder = "일기를 적어주세요"
                name = "content"
                value = {content}
                onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) =>
                    setContent(e.target.value)
                } />
            </JournalPostSC>
            <ButtonDiv>
                <button type = "submit">일기 작성</button>
            </ButtonDiv>
        </JournalPostMain>
    )
}

export default JournalPost;