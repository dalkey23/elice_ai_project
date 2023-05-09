import * as SC from "./CommunityDetailSC";
import { useCommunityDetail } from "../../Component/Hook/Community.hook";
import { useParams } from "react-router-dom";

const CommunityDetail: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));

    if (!item) {
        return (
            <></>
        )
    }

    return (
        <SC.CommunityDetailMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.CommunityDetailTitle>
                <SC.BulletPoint text = {item.category} />
                <h3>{item.title}</h3>
                <h3>{item.authorName}</h3>
                <h3>{item.createdAt.slice(0, 10)} {item.createdAt.slice(11, 19)}</h3>
                <h3>{item.views}</h3>
            </SC.CommunityDetailTitle>
            <SC.CommunityDetailContent>
                {item.content}
            </SC.CommunityDetailContent>
            <br/>
            {/* 댓글부분작성 예정 */}
        </SC.CommunityDetailMain>
    )
};

export default CommunityDetail;