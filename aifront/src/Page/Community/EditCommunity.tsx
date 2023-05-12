import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as SC from "./PostCommunitySC";
import { useCommunityDetail, useEditCommunity } from "../../Component/Hook/Community.hook";
import RichEditor from '../../Component/Base/RichEditor';

const EditCommunity: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));

    // const  { editCommunity, isError }  = useEditCommunity();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e : React.MouseEvent) => {
        e.preventDefault();
        // await editCommunity(Number(id), {
        //     category : category,
        //     title : title,
        //     content : content}, {
        //         onSuccess(res) {
        //             console.log(res);
        //             alert('수정이 완료 되었습니다!');
        //             navigate('/');
        //         },
        //         onError(err) {
        //             console.log(err);
        //             alert('수정이 되지 않았습니다. 다시 작성해 주세요.');
        //         }
        //     })
    }

    return(
        <SC.PostCommunityMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.Title>
                <select name = "category"
                        onChange={(e : React.ChangeEvent<HTMLSelectElement>) =>
                            setCategory(e.target.value)}
                        defaultValue={item?.category}>
                    <option value = "none">글머리 선택</option>
                    <option value = "RESTAURANT">맛집</option>
                    <option value = "RECIPE">레시피</option>
                </select>
                <input
                autoFocus
                placeholder = "글 제목을 적어주세요"
                name = "title"
                value = {item?.title}
                onChange = {(e : React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                } />
            </SC.Title>
            <SC.PostCommunity>
                <RichEditor value={item?.content} onChange={(content: string) =>
                    setContent(content)
                } />

            </SC.PostCommunity>
            <SC.ButtonDiv>
                <button onClick = {handleSubmit}>커뮤니티 글 수정</button>
            </SC.ButtonDiv>
        </SC.PostCommunityMain>
    )
}

export default EditCommunity;