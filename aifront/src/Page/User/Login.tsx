import * as SC from './LoginSC'
const Login = ()=>{

    return(
        <>
        <SC.JoinContainer>
            <SC.JoinItem>
                <input type='text' placeholder='EMAIL' />
            </SC.JoinItem>
            <SC.JoinItem>
                <input type='password' placeholder='PASSWORD'/>
            </SC.JoinItem>
            <SC.ButtonDiv><SC.ConfirmButton>로그인</SC.ConfirmButton></SC.ButtonDiv>
            <div>아이디/비밀번호 찾기</div>
            <div>회원가입</div>
        </SC.JoinContainer>
        </>
    )

};

export default Login;