import React from "react";
import axios from "axios";

const JournalCheck : React.FC = () => {
    
    const MyJournal = async () => {
    try {
        await axios.get('URL');
        console.log('res');
    } catch(err) {
        console.log(err);
    };
    }
    
    MyJournal();

    return(
        <></>
    )
}

export default JournalCheck;