import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Feels from '../../ItemPost/Feels/Feels'
import StickerComment from './StickerComment/StickerComment'
import allFeel from "../../../config/feels";

export default function ItemComment(props) {
    //
    const { commentPost } = props;
    const [feel, setFeel] = useState(null);
    //
    return (
        <div className="w-full mx-0 flex my-2">
            <div className="w-1/12 pt-2">
                <Link to="">
                    <img className="w-12 h-12 p-0.5 object-cover rounded-full"
                        src={commentPost.userCommentPost.avatar}
                        alt="" srcSet="" loading='lazy'
                    />
                </Link>
            </div>
            <div className="w-11/12 ml-2 relative main-comment">
                <div className="comment-per w-max p-2  relative rounded-lg" style={{ maxWidth: "91%" }}>
                    <p><Link to="" className="font-semibold dark:text-white">
                        {`${commentPost.userCommentPost.firstName} ${commentPost.userCommentPost.lastName}`}
                    </Link></p>
                    <StickerComment />
                    <span className="absolute cursor-pointer rounded-full -bottom-1"
                        style={{ left: "92%", whiteSpace: "nowrap" }}>

                    </span>
                    <div className="editCommentsss hidden px-2 dark:text-white cursor-pointer bg-gray-100 dark:bg-dark-third w-8 h-8
                        rounded-full absolute -right-24 " style={{ paddingTop: 9, top: 48 }}>
                        <i className="fas fa-ellipsis-h flex items-center"></i>
                        <ul className="w-36 py-2 dark:bg-dark-main bg-gray-100 z-50 absolute hidden">
                            <li className="w-full dark:text-white p-2 border-2 cursor-pointer font-bold
                                    border-gray-200 border-solid dark:border-dark-second hover:bg-gray-300 dark:hover:bg-dark-second">Chỉnh sửa</li>
                            <li className="w-full dark:text-white p-2 cursor-pointer font-bold 
                                    hover:bg-gray-300 dark:hover:bg-dark-second">Xóa</li>
                        </ul>
                    </div>
                </div>
                <ul className="flex pl-2 items-center font-semibold py-2 text-gray-800 dark:text-white text-xs">
                    <li className="relative flex items-center item__hover pr-2 cursor-pointer ">
                        {feel ? <>
                            <img src={feel.image}
                                alt="" className="w-3.5 mr-1.5 h-3.5 rounded-full object-cover" />
                            <span className="" style={{ color: feel.color }}>{feel.label}</span>
                        </> :
                            <span className="">Thích</span>}
                        <Feels setFeel={setFeel} allFeel={allFeel} comment={true} />
                    </li>
                    <li className="pr-2 cursor-pointer">Trả lời</li>
                    <li className="pr-2 cursor-pointer" >
                        6 tháng trước
                    </li>
                </ul>
            </div>
        </div >
    )
}
