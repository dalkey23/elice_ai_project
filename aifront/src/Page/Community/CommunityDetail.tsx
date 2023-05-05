import * as SC from "./CommunityDetailSC";
import { useCommunityDetail } from "../../Component/Hook/Community.hook";
import { useParams } from "react-router-dom";

const CommunityDetail: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));

    return (
        <SC.CommunityDetailMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.CommunityDetailTitle>
                {item.category}
                {item.title}
                {item.userID}
                {item.createdAt} {/* TODO : substr */}
                {item.views}
            </SC.CommunityDetailTitle>
        </SC.CommunityDetailMain>
    )
};

export default CommunityDetail;