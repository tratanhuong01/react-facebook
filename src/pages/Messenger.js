import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import api from '../api/api'
import ContentMessageTop from '../components/Messenger/ContentMessage/ContentMessageTop/ContentMessageTop'
import ControlMessage from '../components/Messenger/ContentMessage/ControlMessage/ControlMessage'
import MainContentMessage from '../components/Messenger/ContentMessage/MainContentMessage/MainContentMessage'
import MessageList from '../components/Messenger/MessageList/MessengerList'
import SettingMessage from '../components/Messenger/SettingMessage/SettingMessage'
import { MessengerContext, MessengerProvider } from '../contexts/MessagerContext/MessagerContext'
import WrapperLogged from './WrapperLogged'

const WrapperMessenger = (props) => {
    //
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            socket: state.socket
        }
    });
    const params = useParams();
    const { messenger: { left, right, groupMessage, usersList },
        messengersDispatch, messengersAction } = useContext(MessengerContext);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`messages/getList?idUser=${user.id}&offset=${0}&limit=5`, "GET", null, headers);
            if (unmounted) return;
            messengersDispatch(messengersAction.updateData('left', result.data));
        }
        if (user) {
            fetch()
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async (id) => {
            const groupMessage = await api(`groupMessages/check`, "POST", { string: id }, headers);
            const usersList = await api(`messages/getUser?idUser=${user.id}&groupMessage=${id}`, "GET", null, headers);
            let messagesResult = { data: null };
            if (groupMessage.data) {
                messagesResult = await api(`messages?idGroupMessage=${groupMessage.data.id}&offset=0&limit=15`, 'GET', null, headers);
            }
            if (unmounted) return;
            messengersDispatch(messengersAction.updateData('right', messagesResult.data));
            messengersDispatch(messengersAction.updateData('groupMessage', groupMessage.data));
            messengersDispatch(messengersAction.updateData('usersList', usersList.data));
        }
        if (user) {
            if (params.id) {
                fetch(params.id)
            }
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])
    //
    return (
        <div className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full h-full max-h-full">
            <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
                <div className="w-full h-full ">
                    <MessageList allMessage={left} />
                </div>
            </div>
            <div className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 
            dark:border-dark-second z-40">
                {right && groupMessage && usersList && <>
                    <ContentChat />
                    <SettingMessage groupMessage={groupMessage} setGroupMessage={(groupMessage) =>
                        messengersDispatch(messengersAction.updateData('groupMessage', groupMessage))} />
                </>}
            </div>
        </div>
    )
}

const ContentChat = (props) => {
    //
    const { messenger: { right, groupMessage, usersList }, messengersDispatch,
        messengersAction } = useContext(MessengerContext);
    const [dataMessage, setDataMessage] = useState({ type: 0, value: null, content: "" });
    //
    return (
        <div className="w-full z-50 xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
            <ContentMessageTop item={usersList[0]} groupMessage={groupMessage} />
            <MainContentMessage messages={right} item={usersList[0]} groupMessage={groupMessage} />
            <ControlMessage groupMessage={groupMessage} dataMessage={dataMessage} messages={right}
                setDataMessage={setDataMessage} setMessages={(right) =>
                    messengersDispatch(messengersAction.updateData('right', right))} chatter={usersList[0]} />
        </div>
    )
}

export default function Messenger(props) {
    //
    //
    return (
        <WrapperLogged hideChat={true} hideMessage={true}>
            <MessengerProvider>
                <WrapperMessenger>

                </WrapperMessenger>
            </MessengerProvider>
        </WrapperLogged>
    )
}