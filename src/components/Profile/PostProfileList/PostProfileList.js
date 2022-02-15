import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/api';
import { UserProfileContext } from '../../../contexts/UserProfileContext/UserProfileContext'
import ItemPost from '../../ItemPost/ItemPost'
import LoadingPost from '../../ItemPost/LoadingPost';

export default function PostProfileList() {
    //
    const { headers, posts: { list }, user } = useSelector((state) => {
        return {
            headers: state.headers,
            posts: state.posts,
            user: state.user
        }
    });
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { userProfilesDispatch, userProfilesAction, userProfile: { userProfile } } = useContext(UserProfileContext);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            dispatch({
                type: "UPDATE_DATA_POST_LIST",
                key: "list",
                value: []
            })
            const result = await api(`posts?idUser=${userProfile.id}&offset=0&limit=30`, 'GET', {}, headers);
            if (unmounted) return;
            userProfilesDispatch(userProfilesAction.updateData('postList', result.data));
            dispatch({
                type: "UPDATE_DATA_POST_LIST",
                key: "list",
                value: (result.data)
            })
            dispatch({
                type: "UPDATE_DATA_POST_LIST",
                key: "add",
                value: userProfile.id === user.id
            })
            setLoading(false);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userProfile.id])
    //
    return (
        <div className='w-full my-2'>
            {list.length > 0 ? list.map((postDetail) =>
                <ItemPost key={postDetail.post.id} postDetail={postDetail}
                    setPostDetails={list => {
                    }} />
            ) : <p className='my-4 text-center text-gray-600 font-semibold dark:text-gray-300'>
                Không có bất kì bài viết nào.
            </p>}
            {loading ? <>
                <LoadingPost />
                <LoadingPost />
            </> : ''}
        </div>
    )
}
