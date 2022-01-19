import React, { memo, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserProfileContext } from '../../contexts/UserProfileContext/UserProfileContext';
import api from '../../api/api';
import ItemFriendCanKnow from './ItemFriendCanKnow/ItemFriendCanKnow';

export default memo(function FriendCanKnow() {
    //
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    const { userProfile: { userProfile } } = useContext(UserProfileContext);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(true)
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`users/tint?idUser=${user.id}&idView=${userProfile.id}`, 'GET', null, headers);
            if (unmounted) return;
            setUsers(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userProfile, user])
    //
    return (
        users.length > 0 && <div className='w-full px-2 py-0.5 shadow-lv1 bg-white dark:bg-dark-third dark:text-white rounded-lg relative'>
            <div className='flex justify-between w-full py-1.5 items-center'>
                <p className='font-semibold'>Những người bạn có thể biết</p>
                <span className='text-main font-semibold text-sm cursor-pointer' onClick={() => setShow(!show)}>
                    {show ? 'Ẩn' : 'Hiện'}
                </span>
            </div>
            {show && <div className='w-full max-w-full flex gap-2 overflow-x-auto dark:bg-dark-third'>
                {[...users.filter(item => item.id !== user.id)].map(item =>
                    <ItemFriendCanKnow item={item} key={item.id} users={users} setUsers={setUsers} />
                )}
            </div>}
        </div>
    )
})