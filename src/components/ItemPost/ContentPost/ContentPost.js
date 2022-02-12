import React, { memo } from 'react'
import AvatarPost from '../AvatarPost/AvatarPost';
import CoverPost from '../CoverPost/CoverPost';
import NormalPost from '../NormalPost/NormalPost';

export default memo(function ContentPost(props) {
    const { postDetail } = props;
    const PostData = memo(() => {
        let Data = "";
        switch (postDetail.post.typePost) {
            case 0:
                Data = <AvatarPost postDetail={postDetail} />
                break;
            case 1:
                Data = <CoverPost postDetail={postDetail} />
                break;
            case 2:
                Data = <NormalPost imageVideoPostList={postDetail.imageVideoPostList}
                    post={postDetail.post} />
                break;
            default:
                break;
        }
        return Data;
    })
    return (
        <PostData />
    )
}
)