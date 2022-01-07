import React, { useState, useEffect } from 'react'
import ButtonComponent from '../../../ButtonComponent/ButtonComponent'
import ScrollContainer from 'react-indiana-drag-scroll'
import api from '../../../../api/api';
import { useSelector } from 'react-redux';

export default function MeetRom() {
    //
    const [users, setUsers] = useState([]);
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
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
        users.length > 0 ? <div className="my-5 shadow-lv1 w-full flex items-center px-3 py-3 bg-white dark:bg-dark-third rounded-lg">
            <ButtonComponent className="text-blue-500 text-sm rounded-full border border-solid 
            border-gray-200 flex py-1.5 px-5 hover:bg-gray-100 font-semibold dark:hover:bg-dark-second 
            flex items-center justify-center dark:border-gray-300 w-1/2 lg:w-auto">
                <i className='bx bxs-video-plus text-2xl mr-3' style={{ color: "#AB4CB3" }}></i>
                <span>Tạo phòng hop mặt</span>
            </ButtonComponent>
            <ScrollContainer className='overflow-x-auto w-1/2 lg:w-auto'>
                <ul className="mx-4 flex gap-3 ">
                    {users.map(user =>
                        <li key={user.id} className="w-10 h-10 flex-shrink-0 rounded-full relative cursor-pointer">
                            <img src={user.avatar}
                                alt="" className="w-full h-full rounded-full object-cover" />
                            <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
                        </li>
                    )}
                </ul>
            </ScrollContainer>
        </div > : ""
    )
}
