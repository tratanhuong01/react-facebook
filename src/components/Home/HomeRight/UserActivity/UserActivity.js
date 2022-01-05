import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../api/api';
import * as userChatsAction from "../../../../actions/userChat/index";

export default function UserActivity() {
    //
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const { user, headers, userChat: { minize, zoom } } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            userChat: state.userChat
        }
    })
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`users/online?idUser=${user.id}&offset=0&limit=10`, 'GET', null, headers);
            if (unmounted) return;
            setUsers(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        [...users.filter(item => item.id !== user.id)].map(item =>
            <div onClick={() => {
                const indexMinize = minize.findIndex(data => item.id === data.id);
                const indexZoom = zoom.findIndex(data => item.id === data.id);
                if (indexZoom === -1 && indexMinize === -1) {
                    if (zoom.length === 2) {
                        dispatch(userChatsAction.updateData('minize', [...minize, zoom[0]]));
                        let clone = [...zoom];
                        clone[0] = item;
                        dispatch(userChatsAction.updateData('zoom', [...clone]));
                    }
                    else {
                        dispatch(userChatsAction.updateData('zoom', [...zoom, item]));
                    }
                }
                else {
                    if (indexMinize !== -1 && zoom.length !== 2) {
                        dispatch(userChatsAction.updateData('zoom', [...zoom, item]));
                        dispatch(userChatsAction.updateData('minize', [...minize].filter(data => data.id !== item.id)));
                    }
                }
            }} key={item.id} className="w-full flex p-2 items-center relative friends-online relative cursor-pointer dark:hover:bg-dark-third">
                <div className='w-10 h-10 relative'>
                    <img className="w-full h-full rounded-full object-cover"
                        src={item.avatar}
                        alt="" />
                    <span className="w-2.5 h-2.5 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
                </div>
                <p className="font-semibold ml-3 dark:text-white">
                    {`${item.firstName} ${item.lastName}`}
                </p>
            </div>)
    )
}
