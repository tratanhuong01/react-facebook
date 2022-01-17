import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../api/api'
import MainContentMessage from '../Messenger/ContentMessage/MainContentMessage/MainContentMessage'
import SettingMessageChild from '../Messenger/SettingMessage/SettingMessageChild/SettingMessageChild'
import * as StringUtils from "../../utils/StringUtils";
import WrapperItemChat from './WrapperItemChat'
import NewChat from './NewChat'

export default function ItemChat(props) {
    //
    const { item } = props;
    const { user, headers, socket } = useSelector(state => {
        return {
            user: state.user,
            headers: state.headers,
            socket: state.socket
        }
    });
    const [groupMessage, setGroupMessage] = useState({ queryGroupmessage: "", color: "#ccc", emoji: "🙆‍♂️" });
    const [messages, setMessages] = useState(null);
    const [show, setShow] = useState();
    const [dataMessage, setDataMessage] = useState({ type: 0, value: null, content: "" });
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const groupMessage = await api(`groupMessages/check`, "POST", {
                string:
                    StringUtils.generateIDGroupFromListUser([item, user])
            }, headers);
            let messagesResult = { data: null };
            if (groupMessage.data) {
                messagesResult = await api(`messages?idGroupMessage=${groupMessage.data.id}&offset=0&limit=15`, 'GET', null, headers);
            }
            if (unmounted) return;
            setGroupMessage(groupMessage.data ? groupMessage.data : { queryGroupmessage: "", color: "#ccc", emoji: "🙆‍♂️" });
            setMessages(messagesResult.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const handleEvent = (data) => {
            if (user.id !== data.userMessage.id) {
                setMessages([...messages, data]);
            }
        }
        if (groupMessage) {
            socket.on(`receiveMessage.${groupMessage.id}`, handleEvent);
        }
        return () => {
            if (groupMessage) {
                socket.off(`receiveMessage.${groupMessage.id}`, handleEvent);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupMessage, messages])
    //  
    return (
        <WrapperItemChat item={item} groupMessage={groupMessage} setShow={setShow} show={show}
            dataMessage={dataMessage} messages={messages} setDataMessage={setDataMessage} mini={true}
            setMessages={setMessages} chatter={item}>
            {!item.new ? <MainContentMessage messages={messages} item={item} groupMessage={groupMessage} />
                : <NewChat />}
            {show && <ul className='w-72 absolute top-0 right-full bg-white dark:bg-dark-third border-2 border-solid 
                border-gray-300 dark:border-dark-second shadow-lv1 mr-0.5 rounded-lg z-50'>
                <SettingMessageChild hide={true} item={item} groupMessage={groupMessage}
                    setGroupMessage={setGroupMessage} />
            </ul>}
        </WrapperItemChat>
    )
}
