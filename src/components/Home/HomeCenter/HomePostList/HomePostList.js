import React, { forwardRef } from 'react'
import useScrollLoadPost from '../../../../hooks/useScrollLoadPost';
import ItemPost from '../../../ItemPost/ItemPost';
import LoadingPost from '../../../ItemPost/LoadingPost';

export default forwardRef(function HomePostList(props, ref) {
    //
    const { postDetails } = useScrollLoadPost(ref);
    //
    return (
        <>
            {postDetails.length > 0 ? postDetails.map((postDetail) =>
                <ItemPost postDetail={postDetail} key={postDetail.post.id} />
            ) : ''}
            <>
                <LoadingPost />
                <LoadingPost />
            </>
        </>
    )
})
