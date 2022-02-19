import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../api/api'
import MainContentMessage from '../Messenger/ContentMessage/MainContentMessage/MainContentMessage'
import SettingMessageChild from '../Messenger/SettingMessage/SettingMessageChild/SettingMessageChild'
import * as StringUtils from "../../utils/StringUtils";
import WrapperItemChat from './WrapperItemChat'
import NewChat from './NewChat'
import sound from "../../assets/sound/sound.mp3";

export default function ItemChat(props) {
    //
    const newItem = props.item.new;
    const ref = useRef();
    const [groupMessage, setGroupMessage] = useState({ color: "#ccc", emoji: "🙆‍♂️" });
    const [messages, setMessages] = useState([]);
    const [show, setShow] = useState();
    const [dataMessage, setDataMessage] = useState({ type: 0, value: null, content: "" });
    const [choose, setChoose] = useState(newItem ? [] : !Array.isArray(props.item) && typeof props.item === "object" ?
        null : props.item);
    const item = Array.isArray(choose) ? choose.length > 0 ? choose.length === 1 ?
        { ...choose[0].userUserRelationShip } : choose.map(dt => dt.userUserRelationShip ? dt.userUserRelationShip : dt) : props.item :
        { ...props.item, new: false };
    const [members, setMembers] = useState(item ? item.usersList ? !Array.isArray(item.usersList) && typeof item.usersList === "object" ? [item.usersList] :
        [...item.usersList] : [item] : [item]);
    const { user, headers, socket } = useSelector(state => {
        return {
            user: state.user,
            headers: state.headers,
            socket: state.socket
        }
    });
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const queryGroupMessage = StringUtils.generateIDGroupFromListUser(
                Array.isArray(choose) ? choose.length > 0 ? [...choose].concat([user]) : [item, user] : [item, user]
            );
            let groupMessage = { data: null };
            if (!Array.isArray(item.usersList)) {
                groupMessage = await api(`groupMessages/check${''}`, "POST", {
                    string: queryGroupMessage
                }, headers);
            }
            else {
                groupMessage = await api(`groupMessages/check/0`, "POST", {
                    string: item.id
                }, headers);
            }
            let messagesResult = { data: [] };
            if (groupMessage.data) {
                messagesResult = await api(`messages?idGroupMessage=${groupMessage.data.id}&offset=0&limit=15`, 'GET', null, headers);
            }
            if (unmounted) return;
            if (!newItem)
                setGroupMessage(groupMessage.data ? groupMessage.data : { color: "#ccc", emoji: "🙆‍♂️" });
            setMessages(messagesResult.data);
        }
        if (!groupMessage.id) {
            if (Array.isArray(choose)) {
                if (choose.length <= 1) {
                    fetch();
                }
                else {
                    setMessages([])
                }
            }
            else {
                fetch();
            }
            setGroupMessage({ color: "#ccc", emoji: "🙆‍♂️" });
        }
        else {
            fetch();
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [choose]);
    useEffect(() => {
        const handleEvent = (data) => {
            if (user.id !== data.userMessage.id) {
                ref.current.muted = false;
                ref.current.play();
                setMessages([...messages, data]);
            }
        }
        const handleChangeControl = (data) => {
            if (user.id !== data.userMessage.id) {
                setGroupMessage(data.groupMessageMessage);
            }
        }
        if (groupMessage) {
            if (groupMessage.id) {
                socket.on(`receiveMessage.${groupMessage.id}`, handleEvent);
                socket.on(`receiveChangeBackground.${groupMessage.id}`, handleChangeControl);
                socket.on(`receiveChangeEmojii.${groupMessage.id}`, handleChangeControl);
            }
        }
        return () => {
            if (groupMessage) {
                if (groupMessage.id) {
                    socket.off(`receiveMessage.${groupMessage.id}`, handleEvent);
                    socket.off(`receiveChangeBackground.${groupMessage.id}`, handleChangeControl);
                    socket.off(`receiveChangeEmojii.${groupMessage.id}`, handleChangeControl);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupMessage, messages])
    //  
    return (
        <WrapperItemChat item={item} groupMessage={groupMessage} setShow={setShow} show={show} setGroupMessage={setGroupMessage}
            dataMessage={dataMessage} messages={messages} setDataMessage={setDataMessage} mini={true} setChoose={setChoose}
            setMessages={setMessages} chatter={item} choose={choose} members={members} setMembers={setMembers}>
            <audio ref={ref} muted src={sound} className="hidden"></audio>
            {(!item.new && choose === null) || (Array.isArray(item.usersList) && choose === null) ?
                <MainContentMessage messages={messages} item={item} groupMessage={groupMessage}
                    choose={choose} typeGroupMessage={0} />
                : <NewChat choose={choose} setChoose={setChoose} messages={messages} item={item}
                    groupMessage={groupMessage} />}
            {show && <ul className='w-72 absolute top-0 right-full bg-white dark:bg-dark-third border-2 border-solid 
                border-gray-300 dark:border-dark-second shadow-lv1 mr-0.5 rounded-lg z-50'>
                <SettingMessageChild hide={true} item={item} groupMessage={groupMessage}
                    setGroupMessage={setGroupMessage} />
            </ul>}
        </WrapperItemChat>
    )
}
