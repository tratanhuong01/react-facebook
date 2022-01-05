import React, { memo } from 'react'
import AvatarPost from '../AvatarPost/AvatarPost';
import CoverPost from '../CoverPost/CoverPost';
import NormalPost from '../NormalPost/NormalPost';

export default memo(function ContentPost(props) {
    const { postDetail } = props;
    const PostData = () => {
        let data = "";
        switch (postDetail.post.typePost) {
            case 0:
                data = <AvatarPost postDetail={postDetail} />
                break;
            case 1:
                data = <CoverPost postDetail={postDetail} />
                break;
            case 2:
                data = <NormalPost postDetail={postDetail} />
                break;
            default:
                break;
        }
        return data;
    }
    return (
        <PostData />
    )
}
)