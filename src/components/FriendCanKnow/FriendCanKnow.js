import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import users from '../../config/users'
import { useSelector } from 'react-redux'

export default function FriendCanKnow() {
    //
    const user = useSelector((state) => state.user);
    //
    return (
        <div className='w-full px-2 py-0.5 shadow-lv1 bg-white dark:bg-dark-third dark:text-white rounded-lg relative'>
            <div className='flex justify-between w-full py-1.5 items-center'>
                <p className='font-semibold'>Những người bạn có thể biết</p>
                <i className='bx bx-dots-horizontal-rounded text-3xl cursor-pointer' ></i>
            </div>
            <div className='w-full max-w-full flex gap-2 overflow-x-auto dark:bg-dark-third'>
                {[...users.filter(item => item.id !== user.id)].map(item =>
                    <div key={item.id} className='w-40 justify-center rounded-t-lg flex flex-shrink-0 border-2 border-solid 
                    border-gray-200 shadow-lv1 dark:border-dark-third'>
                        <div className='w-full relative'>
                            <img src={item.avatar}
                                alt='' className='w-full h-36 rounded-t-lg object-cover' />
                            <p className='text-base px-2 py-0.5 font-semibold text-center'>
                                {`${item.firstName} ${item.lastName}`}
                            </p>
                            <div className='px-2 mx-auto text-sm flex items-center justify-center'>
                                <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                                    alt='' className='w-4 h-4 rounded-full object-cover mr-2' />
                                <span>256 bạn chung</span>
                            </div>
                            <div className='w-full px-2'>
                                <ButtonComponent className='w-full justify-center p-0.5 my-2 rounded-md text-main bg-blue-100 
                            flex items-center hover:bg-blue-200 font-semibold'>
                                    <i className='bx bx-user-plus text-2xl mr-1' ></i> Thêm bạn bè
                                </ButtonComponent>
                            </div>
                            <div className='w-8 h-8 rounded-full bg-black bg-opacity-50 text-white font-semibold flex justify-center 
                            items-center text-2xl cursor-pointer hover:bg-opactity-70 absolute top-2 right-2'>
                                &times;
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
