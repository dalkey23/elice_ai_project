import * as SC from './UserSC'
const Login = ()=>{

    return(
        <>
        <SC.JoinContainer>
            <SC.JoinItem>
                <label>EMAIL</label>
                <input type='text'></input>
            </SC.JoinItem>
            <SC.JoinItem>
                <label>PASSWORD</label>
                <input type='password'></input>
            </SC.JoinItem>
            <SC.ButtonDiv><SC.ConfirmButton>로그인</SC.ConfirmButton></SC.ButtonDiv>
        </SC.JoinContainer>
        </>
    )

};

export default Login;