import * as SC from "./CommunityDetailSC";
import { useCommunityDetail } from "../../Component/Hook/Community.hook";
import { useParams } from "react-router-dom";

const CommunityDetail: React.FC = () => {
    const { id } = useParams();
    const { item } = useCommunityDetail(Number(id));

    if (!item) {
        return (// <></>
        <SC.CommunityDetailMain>
        <h1>커뮤니티</h1>
        <br/>
        <SC.CommunityDetailTitle>
            <h6>행복해 잘 가</h6>
        </SC.CommunityDetailTitle>
    </SC.CommunityDetailMain>
        )
    }

    return (
        <SC.CommunityDetailMain>
            <h1>커뮤니티</h1>
            <br/>
            <SC.CommunityDetailTitle>
                {item.category}
                {item.title}
                {item.writer}
                {item.createdAt} {/* TODO : substr */}
                {item.views}
            </SC.CommunityDetailTitle>
        </SC.CommunityDetailMain>
    )
};

export default CommunityDetail;