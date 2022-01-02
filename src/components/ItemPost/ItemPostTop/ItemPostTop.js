import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import InfoPostHeader from '../../Modals/ModalPost/TopWritePostModal/InfoPostHeader/InfoPostHeader';

export default function ItemPostTop(props) {
    //
    const user = useSelector((state) => state.user);
    const { postDetail: { post, tagPostList } } = props;
    //
    return (
        <div className="w-full flex relative">
            <div className="w-10%">
                <div className="w-14 h-14 relative">
                    <Link to="">
                        <img className="w-12 h-12 rounded-full object-cover border-4 border-solid border-gray-200"
                            alt=""
                            src={post.userPost.avatar} />
                    </Link>
                </div>
            </div>
            <div className="relative ml-2 pl-3 lg:-ml-1">
                <p className="dark:text-gray-300 dark:text-white pr-5">
                    <Link to="" className="font-semibold mr-2">
                        {`${post.userPost.firstName} ${post.userPost.lastName}`}
                    </Link>
                    {post.typePost === 0 ? 'đã cập nhật ảnh đại diện của anh ấy.' : post.typePost === 1 ?
                        'đã cập nhật ảnh bìa của anh ấy.' : <InfoPostHeader post={post} user={post.userPost}
                            tagList={tagPostList} hideName={true} tagMain={true} />}
                </p>
                <div className="w-full flex">
                    <div className="text-xs pt-0.5 pr-2">
                        <ul className="flex items-center dark:text-gray-300 text-sm text-gray-600">
                            <li className="">
                                <Link to="" className="mr-1">
                                    {post.timeCreated}
                                </Link>
                            </li>
                            <li className="" >
                                ·<i className="cursor-pointer ml-1 text-sm fas fa-globe-europe"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {user.id === post.userPost.id && <i className='bx bx-dots-horizontal-rounded absolute top-0 right-1 text-3xl text-gray-800 
                cursor-pointer' ></i>}
        </div>
    )
}
