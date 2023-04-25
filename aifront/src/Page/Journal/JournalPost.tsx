import React from "react";
import { useRecoilState } from "recoil";
import { journalState } from "../../Atom";
import { JournalPostMain, JournalPostSC, ButtonDiv } from "./JournalPostSC";
import { useCreateJournal, useJournalList } from "../../hooks/journal.hook";

const JournalPost : React.FC = () => {
    const [journal, setJournal] = useRecoilState(journalState);
    const  { createJournal, isLoading, isError }  = useCreateJournal()
    const { journalList } = useJournalList()


    const handleSubmit = async (e : React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await createJournal({name: 'asdf', description: 'asdf'})

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
            {isLoading && <p>로딩중...</p>}
            {isError && <p>에러발생!!</p>}
            <div>{journalList.map(journal => {
                return <div>{journal.name}</div>
            })}</div>
        </JournalPostMain>
    )
}

export default JournalPost;