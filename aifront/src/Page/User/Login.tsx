import React, {  useState } from "react";
import * as SC from "./LoginSC";
import { useLoginUser } from "../../Component/Hook/User.hook";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { loginUser } = useLoginUser();


    const checkedEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const checkedPassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const submitHandler = async (e: React.MouseEvent) => {
        console.log(`email: ${email}, pw : ${password}`)

        e.preventDefault();

        try {
            const res = await loginUser({email, password});
            console.log(res);
            alert("로그인 성공");
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("다시 작성해 주세요.");
        }

    }

    return (
        <>
            <SC.JoinContainer>
                <SC.JoinItem>
                    <input type="text" placeholder="EMAIL" name="email" onChange={checkedEmail}/>
                </SC.JoinItem>
                <SC.JoinItem>
                    <input type="password" placeholder="PASSWORD" onChange={checkedPassword} />
                </SC.JoinItem>
                <SC.ButtonDiv>
                    <SC.ConfirmButton onClick={submitHandler}>로그인</SC.ConfirmButton>
                </SC.ButtonDiv>
                <div>아이디/비밀번호 찾기</div>
                <div>회원가입</div>
            </SC.JoinContainer>
        </>
    );
};

export default Login;
