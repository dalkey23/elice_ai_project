import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { journalState } from "../../Atom";
import { JournalPostMain, JournalPostSC, ButtonDiv } from "./JournalPostSC";

const JournalPost : React.FC = () => {
    const [journal, setJournal] = useRecoilState(journalState);

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
        <JournalPostMain>
            <h1>EEUM : 나와 연결된, 일기</h1>
            <JournalPostSC>
                <textarea
                autoFocus
                placeholder = "일기를 적어주세요"
                value = {journal}
                onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) =>
                    setJournal(e.target.value)
                }
                />
            </JournalPostSC>
            <ButtonDiv>
                <button onClick = {handleSubmit}>일기 작성</button>
            </ButtonDiv>
        </JournalPostMain>
    )
}

export default JournalPost;