import React, { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../api/api';
import ItemPost from '../../../ItemPost/ItemPost';
import LoadingPost from '../../../ItemPost/LoadingPost';

export default forwardRef(function HomePostList(props, ref) {
    //
    // const { postDetails, setPostDetails } = useScrollLoadPost(ref);
    const [index] = useState(0);
    const { user, headers, posts: { list } } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            posts: state.posts
        }
    });
    const dispatch = useDispatch();
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async (index) => {
            dispatch({
                type: "UPDATE_DATA_POST_LIST",
                key: "list",
                value: []
            })
            const result = await api(`posts/home/${user.id}?offset=${index}&limit=10`, "GET", null, headers);
            if (unmounted) return;
            dispatch({
                type: "UPDATE_DATA_POST_LIST",
                key: "list",
                value: result.data
            })
        }
        if (headers.Authorization) {
            fetch(index);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers, user]);
    //
    return (
        <>
            {list.length > 0 ? list.map((postDetail) =>
                <ItemPost postDetail={postDetail} key={postDetail.post.id}
                    setPostDetails={(list) => {
                        dispatch({
                            type: "UPDATE_DATA_POST_LIST",
                            key: "list",
                            value: list,
                        })
                    }} />
            ) : ''}
            <>
                <LoadingPost />
                <LoadingPost />
            </>
        </>
    )
})
