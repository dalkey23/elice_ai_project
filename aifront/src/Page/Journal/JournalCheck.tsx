import React from "react";
import axios from "axios";

const JournalCheck : React.FC = () => {

    const MyJournal = async () => { // 함수 명도 영어 규칙에 맞게 쓰길 권장합니다. 동사 + 명사. ex) fetchMyJournal, getMyJournal
    try {
        await axios.get('URL');
        console.log('res');
    } catch(err) {
        console.log(err);
    };
    }

    MyJournal(); // 이렇게 컴포넌트 내에서 바로 함수 호출되면 컴포넌트라 렌더링 될 때마다 함수가 불필요하게 호출됩니다. useEffect(() => {}, [])
    // useEffect 말고 react-query 사용도 고려해보시면 좋을 듯!

    return(
        <></>
    )
}

export default JournalCheck;