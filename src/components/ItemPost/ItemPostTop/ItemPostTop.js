import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import InfoPostHeader from '../../Modals/ModalPost/TopWritePostModal/InfoPostHeader/InfoPostHeader';
import moment from 'moment';
import { PAGE_PROFILE } from '../../../constants/Config';
import PostTopRight from './PostTopRight/PostTopRight';
export default function ItemPostTop(props) {
    //
    const user = useSelector((state) => state.user);
    const { postDetail: { post, tagPostList } } = props;
    //
    return (
        <div className="w-full flex mb-2 relative">
            <div className="w-12 h-12 relative">
                <Link to={`${PAGE_PROFILE}/${post.userPost.id}`}>
                    <img className="w-12 h-12 rounded-full object-cover border-4 border-solid border-gray-200"
                        alt=""
                        src={post.userPost.avatar} />
                </Link>
                <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
            </div>
            <div className="relative ml-3 pl-3 lg:-ml-1" style={{ width: "calc(100% - 56px)" }}>
                <p className="dark:text-gray-300 dark:text-white pr-5">
                    <Link to={`${PAGE_PROFILE}/${post.userPost.id}`} className="font-semibold mr-2">
                        {`${post.userPost.firstName} ${post.userPost.lastName}`}
                    </Link>
                    {post.typePost === 0 ? `đã cập nhật ảnh đại diện của ${post.userPost.gender === "Nam" ? 'anh' :
                        post.userPost.gender === "Nữ" ? 'cô' : 'bạn'} ấy.` : post.typePost === 1 ?
                        'đã cập nhật ảnh bìa của anh ấy.' : <InfoPostHeader post={post} user={post.userPost}
                            tagList={tagPostList} hideName={true} tagMain={true} itemPost={true} />}
                </p>
                <div className="w-full flex">
                    <div className="text-xs pt-0.5 pr-2">
                        <ul className="flex items-center dark:text-gray-300 text-sm text-gray-600">
                            <li className="">
                                <Link to="" className="mr-1">
                                    {moment(post.timeCreated).fromNow(true)}
                                </Link>
                            </li>
                            <li className="" >
                                ·<i className="cursor-pointer ml-1 text-sm fas fa-globe-europe"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <PostTopRight user={user} post={post} />
        </div>
    )
}
