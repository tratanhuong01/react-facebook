import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeaderLogged from '../components/Header/HeaderLogged/HeaderLogged'
import ItemChat from '../components/ItemChat/ItemChat'
import ItemChatMinize from '../components/ItemChatMinize/ItemChatMinize'
import { PAGE_CALL } from '../constants/Config'
import { ModalContext } from '../contexts/ModalContext/ModalContext'
import WrapperPage from './WrapperPage'
// import sound from "../assets/sound/sound.mp3";
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
    const navigation = useNavigate();
    const { modalsDispatch, modalsAction } = useContext(ModalContext);
    useEffect(() => {
        modalsDispatch(modalsAction.closeModal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const handleEventCallVideo = () => {
            navigation(PAGE_CALL);
        }
        const handleEventMessage = (data) => {
            if (userChat.zoom.findIndex(dt => dt.id === data.send.id) === -1) {
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
            {user && <div className="w-full bg-gray-100 dark:bg-dark-main h-screen overflow-hidden relative" >
                {!hideHeader && <HeaderLogged hideMessage={hideMessage} />}
                {props.children}
                {!hideChat && <div className="h-auto p-3 w-20">
                    <div className="text-center cursor-pointer py-2 pl-2 pr-1.5 fixed right-3 bottom-4 z-30">
                        {userChat.minize.map((item, index) => <ItemChatMinize item={item} key={index} />)}
                        <div className="cursor-pointer shadow-lv1 rounded-full shadow-xl">
                            <i className="far fa-edit text-2xl py-2 px-3 pr-2 rounded-full bg-white dark:bg-dark-second 
                            dark:text-white"></i>
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
