import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as SC from "./PostCommunitySC";
import { useCreateJournal } from "../../Component/Hook/Journal.hook";
import { usePostCommunity } from "../../Component/Hook/Community.hook";
import RichEditor from '../../Component/Base/RichEditor';

const PostCommunity: React.FC = () => {
    const  { postCommunity }  = usePostCommunity();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e : React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await postCommunity({
                category : category,
                title : title,
                content : content})
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
                <select name = "category"
                        onChange={(e : React.ChangeEvent<HTMLSelectElement>) =>
                            setCategory(e.target.value)}>
                    <option value = "none">글머리 선택</option>
                    <option value = "restaurant">맛집</option>
                    <option value = "recipe">레시피</option>
                </select>
                <input
                autoFocus
                placeholder = "글 제목을 적어주세요"
                name = "title"
                value = {title}
                onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                } />
            </SC.TitleDate>
            <SC.PostCommunity>
                <RichEditor value={content} onChange={(content: string) =>
                    setContent(content)
                } />

            </SC.PostCommunity>
            <SC.ButtonDiv>
                <button onClick = {handleSubmit}>커뮤니티 글 작성</button>
            </SC.ButtonDiv>
        </SC.PostCommunityMain>
    )
}

export default PostCommunity;