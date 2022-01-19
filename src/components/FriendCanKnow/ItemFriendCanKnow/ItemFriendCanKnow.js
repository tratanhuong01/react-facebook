import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../api/api';
import { PAGE_PROFILE } from '../../../constants/Config';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';

export default function ItemFriendCanKnow(props) {
    //
    const { item, setUsers, users } = props;
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
            const result = await api(`userRelationships/check/relationship?idUserProfile=${item.id}&idUserMain=${user.id}`,
                'GET', null, headers);
            if (unmounted) return;
            if (result.data) {
                setUsers([...users].filter(dt => dt.id !== item.id));
            }
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //
    return <div key={item.id} className='w-40 justify-center rounded-t-lg flex flex-shrink-0 border-2 border-solid 
    border-gray-200 shadow-lv1 dark:border-dark-third'>
        <div className='w-full relative'>
            <Link to={PAGE_PROFILE + "/" + item.id}>
                <img src={item.avatar}
                    alt='' className='w-full h-36 rounded-t-lg object-cover' />
                <p className='text-base px-2 py-0.5 font-semibold text-center'>
                    {`${item.firstName} ${item.lastName}`}
                </p>
            </Link>
            <div className='px-2 mx-auto text-sm flex items-center justify-center'>
                <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                    alt='' className='w-4 h-4 rounded-full object-cover mr-2' />
                <span>256 bạn chung</span>
            </div>
            <div className='w-full px-2'>
                <ButtonComponent handleClick={async () => {
                    await api(`userRelationships`, 'POST', {
                        id: null,
                        userUserRelationShip: user,
                        idFriend: item.id,
                        status: 1,
                    }, headers);
                    await api(`userRelationships`, 'POST', {
                        id: null,
                        userUserRelationShip: item,
                        idFriend: user.id,
                        status: 2,
                    }, headers);
                    setUsers([...users].filter(dt => dt.id !== item.id))
                }} className='w-full justify-center p-0.5 my-2 rounded-md text-main bg-blue-100 
                flex items-center hover:bg-blue-200 font-semibold'>
                    <i className='bx bx-user-plus text-2xl mr-1' ></i> Thêm bạn bè
                </ButtonComponent>
            </div>
            <div onClick={() => {
                setUsers([...users].filter(dt => dt.id !== item.id))
            }} className='w-8 h-8 rounded-full bg-black bg-opacity-50 text-white font-semibold flex justify-center 
        items-center text-2xl cursor-pointer hover:bg-opactity-70 absolute top-2 right-2'>
                &times;
            </div>
        </div>
    </div>;
}
