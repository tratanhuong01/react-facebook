import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import Feels from '../Feels/Feels';
import ButtonShare from './ButtonShare/ButtonShare';
import allFeel from "../../../config/feels";

export default function FooterItemPost(props) {
    //
    const { user, headers, socket } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            socket: state.socket
        }
    });
    const { postDetail: { feelPostList, commentLength, post }, setPostDetail } = props;
    const [feel, setFeel] = useState();
    const [feelList, setFeelList] = useState();
    const [feelLength, setFeelLength] = useState(feelPostList.length);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`feelPosts/check?idPost=${post.id}&idUser=${user.id}`, 'GET', null, headers);
            const resultList = await api(`feelPosts?idPost=${post.id}`, 'GET', null, headers);
            if (unmounted) return;
            setFeel(result.data);
            if (resultList.data.length > 0) {
                const generateListIconFeel = () => {
                    let arrNew = [];
                    [...resultList.data].forEach(element => {
                        const index = arrNew.findIndex(dt => dt.typeFeelPost === element.typeFeelPost);
                        if (index === -1) {
                            arrNew.push(element);
                        }
                    });
                    return arrNew;
                }
                setFeelList(generateListIconFeel())
            }
        }
        if (headers.Authorization) {
            fetch();
        }
        const handleEvent = (data) => {
            if (data) {
                if (data.userFeelPost.id !== user.id) {
                    let clone = { ...props.postDetail };
                    if (data.unFeel)
                        clone.feelPostList = [...clone.feelPostList].filter(item => item.id !== data.id);
                    else
                        clone.feelPostList = [data].concat([...clone.feelPostList]);
                    setPostDetail({ ...clone });
                    setFeelLength(clone.feelPostList.length);
                }
            }
        }
        socket.on(`receiveFeelPost.${post.id}`, handleEvent);
        return () => {
            socket.off(`receiveFeelPost.${post.id}`, handleEvent);
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers])
    //
    return (
        <>
            <div className="w-full flex text-sm text-gray-700 dark:text-gray-300 justify-between items-center my-1.5">
                <div className="flex items-center">
                    {feelList ? <div className="flex mx-2">
                        {feelList.map(item => <img key={item.id}
                            src={JSON.parse(item.content).image} alt=""
                            className="w-5 h-5 transform scale-90 -ml-1 rounded-full object-cover" />)}
                    </div> : <div className="flex mr-2">
                        {feel && <img src={JSON.parse(feel.content).image} alt=""
                            className="w-5 h-5 transform scale-90 -ml-1 rounded-full object-cover" />}
                    </div>}
                    {feelLength > 0 && <span className="font-semibold ">{feelLength}</span>}
                </div>
                {commentLength > 0 && <span>{commentLength} bình luận</span>}
            </div>
            <ul className="w-full flex border-t-2 border-b-2 border-solid border-gray-200 dark:border-dark-third relative text-gray-700">
                <li className="w-1/3 dark:hover:bg-dark-third hover:bg-gray-100 item__hover">
                    <div onClick={async () => {
                        if (feel) {
                            const idFeel = feel.id;
                            await api(`feelPosts`, 'DELETE', feel, headers);
                            setFeel();
                            setFeelLength(feelLength - 1);
                            socket.emit(`sendFeelPost`, { unFeel: true, userFeelPost: user, postFeelPost: post, id: idFeel })
                        }
                        else {
                            const result = await api(`feelPosts`, 'POST', {
                                id: null,
                                postFeelPost: post,
                                userFeelPost: user,
                                content: JSON.stringify(allFeel[0]),
                                typeFeelPost: 0,
                                timeCreated: null
                            }, headers);
                            setFeel(result.data);
                            socket.emit(`sendFeelPost`, result.data)
                        }

                    }} className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-100 flex w-full 
                    font-semibold h-12 text-sm cursor-pointer justify-center items-center">
                        <div className="flex items-center">
                            {feel ? <>
                                <img src={JSON.parse(feel.content).image}
                                    alt="" className="w-5 mr-1.5 h-5 rounded-full object-cover" />
                                <span className="" style={{ color: JSON.parse(feel.content).color }}>{JSON.parse(feel.content).label}</span>
                            </> :
                                <>
                                    <span className="bx bx-like text-xl" ></span>
                                    <span className=" font-semibold ml-2" >Thích</span>
                                </>}
                        </div>
                    </div>
                    <Feels feel={feel} setFeel={setFeel} post={post} setFeelLength={setFeelLength} feelLength={feelLength} />
                </li>
                <li className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-1/3 font-semibold 
                h-12 text-sm cursor-pointer justify-center items-center flex">
                    <i className="fas fa-comment-alt dark:text-gray-300"></i> &nbsp; Bình Luận
                </li>
                <ButtonShare />
            </ul>
        </>
    )
}
