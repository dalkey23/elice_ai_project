import * as SC from "./CommunityDetailSC";
import { useCommunityDetail, useDeleteCommunity } from "../../Component/Hook/Community.hook";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLoginedUser } from "../../Component/Hook/User.hook";

interface BulletPointProps {
    text: string;
}

const BulletPoint = ({ text }: BulletPointProps) => {
    return <SC.StyledBulletPoint>{text}</SC.StyledBulletPoint>;
};

const CommunityDetail: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));
    const { deleteCommunity, isError } = useDeleteCommunity();
    const navigate = useNavigate();
    const { isLogined } = useGetLoginedUser();

    if (!isLogined) {
        navigate("/Login");
    }

    const deleteHandler = async (e: React.MouseEvent) => {
        e.preventDefault();

        await deleteCommunity(Number(id), {
            onSuccess(res) {
                alert("글 삭제가 완료되었습니다.");
                window.location.href = '/CommunityList';
            },
            onError(err) {
                alert("글 삭제가 완료되지 않았습니다.");
            }
        })

    }

    if (!item) {
        return (
            <></>
        )
    }

    return (
        <SC.CommunityDetailMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.CommunityDetailTitle1>
                <BulletPoint text = {item.category} />
                <SC.TitleItem>{item.title}</SC.TitleItem>
            </SC.CommunityDetailTitle1>
            <SC.CommunityDetailTitle2>
                <div>{item.authorName}</div>
                <div>{item.createdAt.slice(0, 10)} {item.createdAt.slice(11, 19)}</div>
                <div>조회수 {item.views}</div>
            </SC.CommunityDetailTitle2>
            <br/>
            <SC.ButtonDiv>
                <button onClick={ ()=> {navigate(`/EditCommunity/${item.id}`)}}>글 수정</button>
                <button onClick={deleteHandler}>글 삭제</button>
            </SC.ButtonDiv>
            <br/>
            <SC.CommunityDetailContent dangerouslySetInnerHTML={{__html: item.content}}>
            </SC.CommunityDetailContent>
            <br/>
            <SC.CommunityCommentTitle>
                <h3>댓글 ({item.commentList?.length})</h3>
            </SC.CommunityCommentTitle>

            {/* {item.commentList &&
                    item.commentList.map((item) => {
                        return (
                            <SC.CommunityCommentMain>
                                <h4>{item.id}</h4>
                                <p>{item.content}</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </SC.CommunityCommentMain>
                        );
                    }
                )
            } */}

            <SC.CommunityCommentWrite>
                <h4>내이름은서원</h4>
                <div>
                    <input type="text" required />
                    <label>댓글을 작성해주세요.</label>
                    <span></span>
                </div>
                {/* <p>댓글내용</p> */}
                <button>작성</button>
            </SC.CommunityCommentWrite>
            <br/>
            <SC.CommunityCommentList>
                <h4>(댓글작성자명)</h4>
                <p>(댓글내용)</p>
                {/* <button>수정</button> */}
                <button>삭제</button>
            </SC.CommunityCommentList>
            <SC.CommunityCommentList>
                <h4>(댓글작성자명)</h4>
                <p>(댓글내용)</p>
                {/* <button>수정</button> */}
                <button>삭제</button>
            </SC.CommunityCommentList>
            <SC.CommunityCommentList>
                <h4>(댓글작성자명)</h4>
                <p>(댓글내용)</p>
                {/* <button>수정</button> */}
                <button>삭제</button>
            </SC.CommunityCommentList>
        </SC.CommunityDetailMain>
    )
};

export default CommunityDetail;