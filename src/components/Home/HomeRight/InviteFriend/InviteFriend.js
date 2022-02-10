import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import api from '../../../../api/api';
import ItemInviteFriend from './ItemInviteFriend/ItemInviteFriend';

export default function InviteFriend() {
    //
    const [list, setList] = useState();
    const { headers, user } = useSelector((state) => {
        return {
            headers: state.headers,
            user: state.user
        }
    })
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`userRelationships/invite?idUser=${user.id}&offset=0&limit=4`, 'GET',
                null, headers);
            if (unmounted) return;
            setList(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        //
    }, [headers, user])
    //
    return (
        list ? <>
            <div className="w-full flex items-center justify-between">
                <div className='flex items-center'>
                    <img src={`https://res.cloudinary.com/ensonet-dev/image/upload/v1639967753/ImageHomeLeft/tSXYIzZlfrS_femvcs.png`}
                        alt='' className='w-5 h-5 mr-1' />
                    <p className="font-semibold dark:text-white">Lời mời kết bạn</p>
                </div>
                <Link to="" className="font-semibold dark:text-white">
                    Xem tất cả</Link>
            </div>
            {list.length > 0 ? list.map((item) => <ItemInviteFriend list={list}
                setList={setList} item={item} key={item.id} />) :
                <div className="w-full" id="loiMoi">
                    <p className="mx-auto py-3 dark:text-white text-center text-sm text-gray-600 my-5 dark:text-white">
                        Không có lời mời kết bạn</p>
                </div>}
        </> : <div></div>
    )
}
