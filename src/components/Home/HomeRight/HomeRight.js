import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import users from '../../../config/users';

export default function HomeRight() {
    //
    const user = useSelector((state) => state.user);
    //  
    return (
        <div className="fixed hidden h-screen lg:block lg:w-1/3 lg:left-2/3 xl:left-7/10 xl:w-3/10">
            <div className="w-full flex h-full pb-4">
                <div className="w-1/5 hidden sm:hidden xl:block">
                </div>
                <div className="content-right wrapper-content-right w-4/5 overflow-y-auto py-0 
                    px-2.5 lg:w-full xl:w-4/5">
                    <div className="w-full">
                        <p className="font-bold dark:text-white pt-2.5">Được tài trợ</p>
                        <div className="w-full flex mx-0 my-4">
                            <img className="w-32 h-32 object-contain rounded-lg" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/252103525_23849638828240284_3688270660731029495_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=thVXYzqupNsAX-cy61A&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rcBPP76HA188y3yI2hSx2uBBzkuvur0qelhqC3dnwSA&oe=61C531C3" alt="" />
                            <div className="block my-9 mx-2.5">
                                <span><Link to="" className="dark:text-white font-bold">Didongviet</Link></span> <br />
                                <span><Link className="text-xs dark:text-white" to="">didongviet.vn</Link></span>
                            </div>
                        </div>
                        <div className="w-full flex mx-0 my-4">
                            <img className="w-32 h-32 object-contain rounded-lg" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/252103525_23849638828240284_3688270660731029495_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=thVXYzqupNsAX-cy61A&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_rcBPP76HA188y3yI2hSx2uBBzkuvur0qelhqC3dnwSA&oe=61C531C3" alt="" />
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
                    <div className="w-full pt-3 flex items-center">
                        <div className="w-1/2 py-2.5 px-0">
                            <p className="font-bold dark:text-white">Bạn bè</p>
                        </div>
                        <div className="w-1/2">
                            <ul className="flex float-right gap-4">
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
                    </div>
                    {
                        [...users.filter(item => item.id !== user.id)].map(item =>
                            <div key={item.id} className="w-full flex p-2 items-center relative friends-online relative cursor-pointer dark:hover:bg-dark-third">
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
                    }
                </div>
            </div>
        </div >
    )
}
