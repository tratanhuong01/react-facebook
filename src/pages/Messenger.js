import React from 'react'
import ContentMessageTop from '../components/Messenger/ContentMessage/ContentMessageTop/ContentMessageTop'
import ControlMessage from '../components/Messenger/ContentMessage/ControlMessage/ControlMessage'
import MainContentMessage from '../components/Messenger/ContentMessage/MainContentMessage/MainContentMessage'
import MessageList from '../components/Messenger/MessageList/MessengerList'
import SettingMessage from '../components/Messenger/SettingMessage/SettingMessage'
import WrapperLogged from './WrapperLogged'

export default function Messenger() {
    //
    //
    return (
        <WrapperLogged hideChat={true} hideMessage={true}>
            <div className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full h-full max-h-full">
                <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
                    <div className="w-full h-full ">
                        <MessageList />
                    </div>
                </div>
                <div className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 
                dark:border-dark-second z-40">
                    <div className="w-full z-50 xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
                        <ContentMessageTop item={{ avatar: "", firstName: "Tra", lastName: "Huong" }} />
                        <MainContentMessage />
                        <ControlMessage />
                    </div>
                    <SettingMessage />
                </div>
            </div>
        </WrapperLogged>
    )
}
