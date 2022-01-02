import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../api/api';
import ItemPost from '../../../ItemPost/ItemPost';

export default function HomePostList() {
    //
    const [postDetails, setPostDetais] = useState([]);
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`posts/home/${user.id}`, "GET", null, headers);
            if (unmounted) return;
            setPostDetais(result.data);
        }
        if (headers.Authorization) {
            fetch();
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers])
    //
    return (
        postDetails.length > 0 ? postDetails.map((postDetail =>
            <ItemPost postDetail={postDetail} key={postDetail.post.id} />
        )) : ''
    )
}
