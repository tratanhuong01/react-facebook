import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../api/api';
import ItemPost from '../../../ItemPost/ItemPost';
import LoadingPost from '../../../ItemPost/LoadingPost';

export default (function HomePostList(props) {
    //
    const [postDetails, setPostDetais] = useState([]);
    const [index, setIndex] = useState(0);
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async (index) => {
            const result = await api(`posts/home/${user.id}?offset=${index}&limit=2`, "GET", null, headers);
            if (unmounted) return;
            setPostDetais([...postDetails].concat(result.data));
        }
        if (headers.Authorization) {
            fetch(index);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers, index])
    //
    return (
        <>
            {postDetails.length > 0 ? postDetails.map((postDetail) =>
                <ItemPost setIndex={setIndex} postDetail={postDetail} key={postDetail.post.id} />
            ) : ''}
            <>
                <LoadingPost />
                <LoadingPost />
            </>
        </>
    )
})
