import { useNavigate } from "react-router";
import { useDeleteUser, useGetLoginedUser } from "../../Component/Hook/User.hook";
import * as SC from "./DeletedUserSC";

const DeletedUser = () => {
    const navigate = useNavigate();
    const { deleteUser } = useDeleteUser();

    const { LoginedUser, isLogined } = useGetLoginedUser();
    const userdata = LoginedUser?.data.item;
  

    const submitHandler = async (e: React.MouseEvent) => {
        if(userdata !== undefined){
            await deleteUser(userdata?.id, {
                onSuccess(res) {
                    console.log(res);
                    localStorage.removeItem("token");
                    window.location.href = "/";
                },
                onError(err) {
                    console.log(err);
                    alert("회원탈퇴에 실패했습니다.");
                },
            });
            
        }
       
    };

    if (!isLogined) {
        navigate("/Login");
    }

    if (!userdata) {
        return <></>;
    }


    return (
        <SC.Container>
            <SC.InfoTitle>회원탈퇴</SC.InfoTitle>
            <div>
                회원탈퇴를 위해 비밀번호를 입력해주세요
                <input type="password" />
            </div>
            <SC.ButtonDiv>
                <SC.ConfirmButton onClick={submitHandler}>
                    탈퇴
                </SC.ConfirmButton>
            </SC.ButtonDiv>
        </SC.Container>
    );
};

export default DeletedUser;
