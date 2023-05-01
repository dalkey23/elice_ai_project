import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as SC from "./PostCommunitySC";
import { useCreateJournal } from "../../Component/Hook/Journal.hook";

const PostCommunity: React.FC = () => {
    const  { createJournal, isLoading, isError }  = useCreateJournal();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e : React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await createJournal({
                title : title,
                content : content,
                publishedDate: publishedDate})
            console.log(res);
            alert('작성이 완료 되었습니다!');
            navigate('/');
        } catch(err) {
            console.log(err);
            alert('다시 작성해 주세요.');
        }
    }

    return(
        <SC.PostCommunityMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.TitleDate>
                <input
                placeholder = "날짜 : 0000-00-00"
                name = "publishedDate"
                value = {publishedDate}
                onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>
                    setPublishedDate(e.target.value)
                } />
                <input
                autoFocus
                placeholder = "일기 제목을 적어주세요"
                name = "title"
                value = {title}
                onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                } />
            </SC.TitleDate>
            <SC.PostCommunity>
                <textarea
                placeholder = "일기를 적어주세요"
                name = "content"
                maxLength = {100}
                value = {content}
                onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) =>
                    setContent(e.target.value)
                } />
            </SC.PostCommunity>
            <SC.ButtonDiv>
                <button onClick = {handleSubmit}>일기 작성</button>
            </SC.ButtonDiv>
            {isLoading && <p>로딩중...</p>}
            {isError && <p>에러발생!!</p>}
        </SC.PostCommunityMain>
    )
}

export default PostCommunity;