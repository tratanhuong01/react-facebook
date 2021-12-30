import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HeaderLogged from '../components/Header/HeaderLogged/HeaderLogged'
import ItemChatMinize from '../components/ItemChatMinize/ItemChatMinize'
import ContentMessageTop from '../components/Messenger/ContentMessage/ContentMessageTop/ContentMessageTop'
import ControlMessage from '../components/Messenger/ContentMessage/ControlMessage/ControlMessage'
import MainContentMessage from '../components/Messenger/ContentMessage/MainContentMessage/MainContentMessage'
import { ModalContext } from '../contexts/ModalContext/ModalContext'
import WrapperPage from './WrapperPage'

export default function WrapperLogged(props) {
    //
    const { hideChat, hideMessage } = props;
    const user = useSelector((state) => state.user);
    const { modalsDispatch, modalsAction } = useContext(ModalContext);
    useEffect(() => {
        modalsDispatch(modalsAction.closeModal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <WrapperPage>
            {user && <div className="w-full bg-gray-100 dark:bg-dark-main h-screen overflow-hidden relative" >
                <HeaderLogged hideMessage={hideMessage} />
                {props.children}
                {!hideChat && <div className="h-auto p-3 w-20">
                    <div className="text-center cursor-pointer py-2 pl-2 pr-1.5 fixed right-3 bottom-4 z-30">
                        <ItemChatMinize />
                        <ItemChatMinize />
                        <div className="cursor-pointer shadow-lv1 rounded-full shadow-xl">
                            <i className="far fa-edit text-2xl py-2 px-3 pr-2 rounded-full bg-white dark:bg-dark-second 
                            dark:text-white"></i>
                        </div>
                    </div>
                </div>}
                <div className="fixed bottom-0 flex right-20 z-40">
                    <div className="relative bg-white m-2 dark:bg-dark-second rounded-lg 
                    dark:border-dark-third border-2 border-solid border-gray-300 ml-auto" style={{ width: 340, height: 486 }}>
                        <div className='w-full h-full flex flex-col'>
                            <ContentMessageTop mini={true} />
                            <MainContentMessage />
                            <ControlMessage />
                        </div>
                    </div>
                </div>
            </div >}
        </WrapperPage>
    )
}
