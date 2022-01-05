import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Feels from '../../ItemPost/Feels/Feels'
import allFeel from "../../../config/feels";
import ContentComment from './ContentComment/ContentComment';
import moment from 'moment';
import api from '../../../api/api';
import { useSelector } from 'react-redux';

export default function ItemComment(props) {
    //
    const { commentPost, setReply } = props;
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const [feel, setFeel] = useState(null);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`feelComments/check?idUser=${user.id}&idCommentPost=${commentPost.id}`,
                'GET', null, headers);
            if (unmounted) return;
            setFeel(result.data);
        }
        if (!commentPost.loading) {
            fetch();
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <div className="w-full mx-0 flex my-2">
            <Link to="">
                <img className="w-12 h-12 p-0.5 mt-2 object-cover rounded-full"
                    src={commentPost.userCommentPost.avatar}
                    alt="" srcSet="" loading='lazy'
                />
            </Link>
            <div className="relative main-comment" style={{ width: "calc(100% - 54px)" }}>
                <div className={`comment-per w-max p-2 bg-gray-100 ml-1 relative rounded-lg`} style={{ maxWidth: "91%" }}>
                    <p><Link to="" className="font-semibold dark:text-white">
                        {`${commentPost.userCommentPost.firstName} ${commentPost.userCommentPost.lastName}`}
                    </Link></p>
                    {!commentPost.loading ? <>
                        {commentPost.content && <p>{commentPost.content}</p>}
                    </> : <i className="fas fa-circle-notch text-xs text-gray-500 mx-9 fa-spin"></i>}
                </div>
                {!commentPost.loading && <div className='my-0.5'>
                    <ContentComment commentPost={commentPost} />
                </div>}
                {!commentPost.loading && <ul className="flex pl-2 items-center font-semibold text-gray-800 dark:text-white text-xs">
                    <li className="relative flex items-center item__hover pr-2 cursor-pointer ">
                        <div onClick={async () => {
                            if (feel) {
                                await api(`feelComments`, 'DELETE', feel, headers);
                                setFeel();
                            }
                            else {
                                const result = await api(`feelComments`, 'POST', {
                                    id: null,
                                    commentPostFeelComment: commentPost,
                                    userFeelComment: user,
                                    content: JSON.stringify(allFeel[0]),
                                    typeFeelComment: 0,
                                    timeCreated: null
                                }, headers);
                                setFeel(result.data);
                            }
                        }} className='flex items-center'>
                            {feel ? <>
                                <img src={JSON.parse(feel.content).image}
                                    alt="" className="w-3.5 mr-1.5 h-3.5 rounded-full object-cover" />
                                <span className="" style={{ color: JSON.parse(feel.content).color }}>{JSON.parse(feel.content).label}</span>
                            </> :
                                <span className="">Thích</span>}
                        </div>
                        <Feels setFeel={setFeel} comment={true} post={commentPost} />
                    </li>
                    <li onClick={() => setReply(true)} className="pr-2 cursor-pointer">Trả lời</li>
                    <li className="pr-2 cursor-pointer" >
                        {moment(commentPost.timeCreated).fromNow(true)}
                    </li>
                </ul>}
            </div>
        </div >
    )
}
