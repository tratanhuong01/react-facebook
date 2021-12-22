import React, { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext/PostContext'

export default function TopWritePostModal() {
    //
    const { posts } = useContext(PostContext);
    //
    return (
        <div className="w-full flex px-0 py-2">
            <div className="w-2/12 pt-1">
                <img className="w-14 h-14 rounded-full object-cover mx-auto"
                    src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                    alt="" />
            </div>
            <div className="w-11/12">
                <p className="pt-0.5 dark:text-white">
                    <span className='font-semibold mr-2'>Trà Hưởng</span>
                    {posts.feel && <span id="feelCur">đang 🙂 cảm thấy hạnh phúc </span>}
                    {posts.tags.length > 0 && <span id="tag"> cùng với <span className='font-semibold'>Anh Hoang</span> và
                        {` `} <span className='font-semibold'>3 người khác</span></span>}
                    {posts.local && <span id="local"> tại <b className="dark:text-white">Quảng Bình</b></span>}
                </p>
                <div className="py-0 px-1 mt-0.5 w-28 bg-gray-300 dark:bg-dark-third rounded-full">
                    <div className="flex gap-1 py-1.5 justify-center text-xs relative cursor-pointer items-center">
                        <i className="fas fa-globe-europe dark:text-white"></i>
                        <b className="dark:text-white">&nbsp;Công Khai&nbsp;&nbsp;</b>
                        <i className="fas fa-sort-down -mt-0.5 dark:text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
