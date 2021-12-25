import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FooterItemPost from './FooterItemPost/FooterItemPost';
import AvatarPost from './AvatarPost/AvatarPost';
import TypeCommentInput from '../Comment/TypeCommentInput/TypeCommentInput';
import ItemComment from '../Comment/ItemComent/ItemComment';

export default function ItemPost() {
    //
    const [dataComment, setDataComment] = useState({ value: null, content: "", type: -1 });
    //
    return (
        <div className="w-full bg-white dark:bg-dark-second my-4 shadow-lv1 py-4 px-2 rounded-lg">
            <div className="w-full flex">
                <div className="w-10%">
                    <div className="w-14 h-14 relative">
                        <Link to="">
                            <img className="w-12 h-12 rounded-full object-cover border-4 border-solid border-gray-200"
                                alt=""
                                src="https://res.cloudinary.com/tratahuong01/image/upload/v1619944098/Avatar/hn78abc4gea5wryanlta.jpg" />
                        </Link>
                    </div>
                </div>
                <div className="relative ml-2 lg:-ml-1">
                    <p className="dark:text-gray-300 dark:text-white">
                        <Link to="" className="font-semibold mr-2">
                            Phương Thảo
                        </Link>
                        đã cập nhật ảnh đại diện của anh ấy.
                    </p>
                    <div className="w-full flex">
                        <div className="text-xs pt-0.5 pr-2">
                            <ul className="flex items-center dark:text-gray-300 text-sm text-gray-600">
                                <li className="">
                                    <Link to="" className="mr-1">
                                        7 tháng trước</Link>
                                </li>
                                <li className="" >
                                    ·<i className="cursor-pointer ml-1 text-sm fas fa-globe-europe"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center relative w-10%">
                    <i className='bx bx-dots-horizontal-rounded mt-0 -mr-3 text-3xl text-gray-800 
                    cursor-pointer' ></i>
                </div>
            </div>
            <div className="w-full mx-0 my-2.5">
                <p className="dark:text-white"></p>
            </div>
            <AvatarPost />
            <div className="w-full my-4 mx-0">
                <FooterItemPost />
            </div>
            <div className="w-full">
                <ItemComment />
            </div>
            <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment} />
        </div>

    )
}
