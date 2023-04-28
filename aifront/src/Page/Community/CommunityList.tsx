import React, { useState } from "react";
import axios from "axios";
import { CommunityListMain, ButtonDiv } from "./CommunityListSC";

const CommunityList : React.FC = () => {
    const [journal, setJournal] = useState('');

    const handleSubmit = async (e : React.MouseEvent) => {
        e.preventDefault();

        try {
            await axios.post('URL', {journal});
            alert('작성이 완료 되었습니다!');
        } catch(err) {
            console.log(err);
            alert('다시 작성해 주세요.');
        }

    }
    return(
        <CommunityListMain>
            <h1>커뮤니티</h1>
            <ButtonDiv>
                <button onClick = {handleSubmit}>글쓰기</button>
            </ButtonDiv>
        </CommunityListMain>
    )
}

export default CommunityList;