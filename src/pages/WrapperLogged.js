import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeaderLogged from '../components/Header/HeaderLogged/HeaderLogged'
import ItemChat from '../components/ItemChat/ItemChat'
import ItemChatMinize from '../components/ItemChatMinize/ItemChatMinize'
import { PAGE_CALL } from '../constants/Config'
import WrapperPage from './WrapperPage'
import sound from "../assets/sound/sound.mp3";
import * as userChatsAction from "../actions/userChat/index";

export default function WrapperLogged(props) {
    //
    const { hideChat, hideMessage, hideHeader } = props;
    const dispatch = useDispatch();
    const { user, userChat, socket } = useSelector((state) => {
        return {
            user: state.user,
            userChat: state.userChat,
            socket: state.socket
        }
    });
    const ref = useRef();
    const navigation = useNavigate();
    useEffect(() => {
        const handleEventCallVideo = () => {
            navigation(PAGE_CALL);
        }
        const handleEventMessage = (data) => {
            if (userChat.zoom.findIndex(dt => dt.id === data.send.id) === -1) {
                ref.current.muted = false;
                ref.current.play();
                dispatch(userChatsAction.updateData('zoom', [...userChat.zoom, data.send]))
                socket.off(`receiveMessageOnline.${user.id}`, handleEventMessage);
            }
        }
        if (user) {
            socket.on(`callVideo.${user.id}`, handleEventCallVideo);
            socket.on(`receiveMessageOnline.${user.id}`, handleEventMessage);
        }
        return () => {
            if (user) {
                socket.off(`callVideo.${user.id}`, handleEventCallVideo);
                socket.off(`receiveMessageOnline.${user.id}`, handleEventMessage);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, userChat]);
    //
    return (
        <WrapperPage>
            <audio ref={ref} src={sound} muted className='hidden'></audio>
            {user && <div className="w-full bg-gray-100 dark:bg-dark-main h-screen overflow-hidden relative" >
                {!hideHeader && <HeaderLogged hideMessage={hideMessage} />}
                {props.children}
                {!hideChat && <div className="h-auto p-3 w-20">
                    <div className="text-center cursor-pointer py-2 pl-2 pr-1.5 fixed right-3 bottom-4 z-30">
                        {userChat.minize.map((item, index) => <ItemChatMinize item={item} key={index} />)}
                        <div onClick={() => {
                            dispatch(userChatsAction.updateData('zoom', [...userChat.zoom, { id: "new", new: true }]))
                        }} className="cursor-pointer shadow-lv1 rounded-full shadow-xl rounded-full bg-white dark:bg-dark-second 
                        dark:text-white w-12 h-12 border-2 border-solid border-gray-200 dark:border-dark-third flex 
                        items-center justify-center ">
                            <i className="fas fa-plus text-2xl"></i>
                        </div>
                    </div>
                </div>}
                {userChat.zoom.length > 0 && <div className="fixed bottom-0 flex right-20 z-40">
                    {userChat.zoom.map((item, index) =>
                        <ItemChat key={index} item={item} />
                    )}
                </div>}
            </div >}
        </WrapperPage>
    )
}
