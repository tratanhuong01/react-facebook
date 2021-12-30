import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { PostContext } from '../../../../contexts/PostContext/PostContext'

export default function TopWritePostModal() {
    //
    const { posts } = useContext(PostContext);
    const user = useSelector((state) => state.user);
    //
    return (
        <div className="w-full flex px-0 py-2">
            <img className="w-14 h-14 ml-3 mt-1 rounded-full object-cover mx-auto"
                src={user.avatar}
                alt="" />
            <div className=" pl-2 " style={{ width: "calc(100% - 70px)" }}>
                <p className="pt-0.5 dark:text-white">
                    <span className='font-semibold mr-2'>{`${user.firstName} ${user.lastName}`}</span>
                    {posts.feel && <span id="feelCur">đang {posts.feel.data} cảm thấy {posts.feel.label.toLowerCase()} </span>}
                    {posts.activity && <span id="feelCur">đang {posts.activity.data} {posts.activity.name.replace('Đang', '')} {posts.activity.label.toLowerCase()} </span>}
                    {posts.tags.length > 0 && <span id="tag">cùng với <span className='font-semibold'>
                        {`${posts.tags[0].firstName} ${posts.tags[0].lastName}`}</span>
                        {posts.tags.length > 1 &&
                            <> và
                                {` `}<span className='font-semibold'>{posts.tags.length - 1} người khác </span>
                            </>}
                    </span>}
                    {posts.local && <span id="local">tại <b className="dark:text-white">{posts.local.name}</b></span>}
                </p>
                <div className="py-0 px-1 mt-0.5 w-28 bg-gray-300 dark:bg-dark-third rounded-full">
                    <div className="flex gap-1 py-1.5 justify-center text-xs relative cursor-pointer items-center">
                        <i className="fas fa-globe-europe dark:text-white"></i>
                        <b className="dark:text-white">&nbsp;Công Khai&nbsp;&nbsp;</b>
                        <i className="fas fa-sort-down -mt-0.5 dark:text-white"></i>
                    </div>
                </div>
            </div>
        </div >
    )
}
