import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import { UserProfileContext } from '../../../contexts/UserProfileContext/UserProfileContext'
import ItemPost from '../../ItemPost/ItemPost'

export default function PostProfileList() {
    //
    const headers = useSelector((state) => state.headers);
    const { userProfilesDispatch, userProfilesAction, userProfile: { postList, userProfile } } = useContext(UserProfileContext);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`posts?idUser=${userProfile.id}&offset=0&limit=2`, 'GET', {}, headers);
            if (unmounted) return;
            userProfilesDispatch(userProfilesAction.updateData('postList', result.data));
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
            {postList.map((postDetail, index) => <ItemPost key={index} postDetail={postDetail} />
            )}
        </div>
    )
}
