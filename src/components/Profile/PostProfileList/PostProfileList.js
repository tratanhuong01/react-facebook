import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/api';
import { UserProfileContext } from '../../../contexts/UserProfileContext/UserProfileContext'
import ItemPost from '../../ItemPost/ItemPost'
import LoadingPost from '../../ItemPost/LoadingPost';

export default function PostProfileList() {
    //
    const { headers, posts: { list } } = useSelector((state) => {
        return {
            headers: state.headers,
            posts: state.posts
        }
    });
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
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userProfile])
    //
    return (
        <div className='w-full my-2'>
            {list.map((postDetail, index) => <ItemPost key={index} postDetail={postDetail}
                setPostDetails={list => {

                }} />
            )}
            <LoadingPost />
            <LoadingPost />
        </div>
    )
}
