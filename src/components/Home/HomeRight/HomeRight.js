import React from 'react'
import { Link } from 'react-router-dom'
import UserActivity from './UserActivity/UserActivity';

export default function HomeRight() {
    //
    //  
    return (
        <div className="fixed hidden h-screen lg:block lg:w-1/3 lg:left-2/3 xl:left-3/4 xl:w-1/4">
            <div className="w-full flex h-full pb-4">
                <div className="w-1/5 hidden sm:hidden xl:block">
                </div>
                <div className="content-right wrapper-content-right w-4/5 overflow-y-auto py-0 
                    px-2.5 lg:w-full xl:w-4/5">
                    <div className="w-full">
                        <p className="font-bold dark:text-white pt-2.5">Được tài trợ</p>
                        <div className="w-full flex mx-0 my-4">
                            <img className="w-32 h-32 object-contain rounded-lg"
                                src="https://res.cloudinary.com/tratahuong01/image/upload/v1620001760/Avatar/p5vqncs5a5wdc1tv4kl9.jpg" alt="" />
                            <div className="block my-9 mx-2.5">
                                <span><Link to="" className="dark:text-white font-bold">Didongviet</Link></span> <br />
                                <span><Link className="text-xs dark:text-white" to="">didongviet.vn</Link></span>
                            </div>
                        </div>
                        <div className="w-full flex mx-0 my-4">
                            <img className="w-32 h-32 object-contain rounded-lg"
                                src="https://res.cloudinary.com/tratahuong01/image/upload/v1620001760/Avatar/p5vqncs5a5wdc1tv4kl9.jpg" alt="" />
                            <div className="block my-9 mx-2.5">
                                <span><Link to="" className="dark:text-white font-bold">Didongviet</Link></span> <br />
                                <span><Link className="text-xs dark:text-white" to="">didongviet.vn</Link></span>
                            </div>
                        </div>
                    </div>
                    <hr className="my-3 mx-auto w-full" />
                    <div className="w-full flex items-center justify-between">
                        <p className="font-semibold dark:text-white">Lời mời kết bạn</p>
                        <Link to="" className="font-semibold dark:text-white">
                            Xem tất cả</Link>
                    </div>
                    <div className="w-full" id="loiMoi">
                        <p className="mx-auto py-3 dark:text-white text-center text-sm text-gray-600 my-5 dark:text-white">
                            Không có lời mời kết bạn</p>
                    </div>
                    <div className="w-full pt-3 flex items-center justify-between">
                        <div className="">
                            <p className="font-bold dark:text-white">Bạn bè</p>
                        </div>
                        <ul className="flex gap-4">
                            <li className="cursor-pointer w-8 h-8 flex hover:bg-gray-200 rounded-full flex justify-center 
                                items-center text-gray-500">
                                <i className="fas fa-video dark:text-white"></i>
                            </li>
                            <li className="cursor-pointer w-8 h-8 flex hover:bg-gray-200 rounded-full flex justify-center 
                                items-center text-gray-500">
                                <i className="fab fa-searchengin dark:text-white"></i>
                            </li>
                            <li className="cursor-pointer w-8 h-8 flex hover:bg-gray-200 rounded-full flex justify-center 
                                items-center text-gray-500">
                                <i className="fas fa-ellipsis-h dark:text-white"></i>
                            </li>
                        </ul>
                    </div>
                    <UserActivity />
                </div>
            </div>
        </div >
    )
}
