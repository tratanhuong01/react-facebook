import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ButtonComponent from '../../../../ButtonComponent/ButtonComponent'
import ItemPopoverNotification from './ItemPopoverNotification/ItemPopoverNotification';

const NotFoundNotification = () => {
    return (
        <div className='w-full py-2 -mt-8'>
            <img src='https://www.facebook.com/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg' alt=''
                className='my-2 mx-auto w-40 object-cover' />
            <p className='text-center font-semibold my-1'>Bạn không có thông báo nào</p>
        </div>
    )
}

export default function PopoverNotification() {
    //
    const [active, setActive] = useState(0);
    const [notifies, setNotifies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    //
    return (
        <div className='w-full p-2 rounded-lg'>
            <div className='w-full flex items-center justify-between py-2'>
                <p className='text-xl font-semibold dark:text-white'>Thông báo</p>
                <span className='w-6 h-6 rounded-full cursor-pointer hover:bg-gray-200 hover:bg-dark-third 
                bx bx-dots-horizontal-rounded text-2xl text-gray-600 dark:text-gray-300 flex justify-center 
                items-center dark:hover:bg-dark-main dark:hover:text-white'></span>
            </div>
            <ul className='flex mb-2 gap-2 items-center'>
                <li>
                    <ButtonComponent handleClick={() => { setActive(0); setNotifies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); }}
                        className={`px-4 py-1.5 rounded-full ${active === 0 ? 'bg-blue-100 text-main' :
                            'bg-gray-300'} font-semibold`}>
                        Tất cả
                    </ButtonComponent>
                </li>
                <li>
                    <ButtonComponent handleClick={() => { setActive(1); setNotifies([]); }}
                        className={`px-4 py-1.5 rounded-full ${active === 1 ? 'bg-blue-100 text-main' :
                            'bg-gray-200'} font-semibold`}>
                        Chưa đọc
                    </ButtonComponent>
                </li>
            </ul>
            <div className='w-full flex items-center justify-between py-1'>
                <p className='font-semibold dark:text-gray-300'>Mới</p>
                <Link to={''} className='text-main'>Xem tất cả</Link>
            </div>
            <div className='w-full overflow-y-auto overflow-x-hidden dark:text-white' style={{ maxHeight: 600 }}>
                {notifies.length > 0 ? active === 0 ?
                    notifies.map((notify, index) =>
                        <ItemPopoverNotification isRead={true} key={index} />
                    ) :
                    notifies.map((notify, index) =>
                        <ItemPopoverNotification isRead={false} key={index} />
                    ) :
                    <NotFoundNotification setNotifies={setNotifies} />}
            </div>
        </div>
    )
}
