import React from 'react'
import { useSelector } from 'react-redux'
import HeaderLogged from '../components/Header/HeaderLogged/HeaderLogged'
import ItemChatMinize from '../components/ItemChatMinize/ItemChatMinize'
import WrapperPage from './WrapperPage'

export default function WrapperLogged(props) {
    //
    const { hideChat } = props;
    const user = useSelector((state) => state.user);
    //
    return (
        <WrapperPage>
            {user && <div className="w-full bg-gray-100 dark:bg-dark-main h-screen relative" >
                <HeaderLogged />
                {props.children}
                {!hideChat && <div className="h-auto p-3 w-20">
                    <div className="text-center cursor-pointer py-2 pl-2 pr-1.5 fixed right-3 bottom-4 ">
                        <ItemChatMinize />
                        <ItemChatMinize />
                        <div className="cursor-pointer shadow-lv1 rounded-full shadow-xl">
                            <i className="far fa-edit text-2xl py-2 px-3 pr-2 rounded-full bg-white dark:bg-dark-second 
                            dark:text-white"></i>
                        </div>
                    </div>
                </div>}
            </div >}
        </WrapperPage>
    )
}
