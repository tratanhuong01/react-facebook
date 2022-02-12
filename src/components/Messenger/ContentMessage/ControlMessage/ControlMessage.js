import React, { useRef, useState } from 'react'
import PopoverEmojii from '../../../Popovers/PopoverEmojii/PopoverEmojii';
import PopoverSticker from '../../../Popovers/PopoverSticker/PopoverSticker';
import * as functions from "../../../../functions";
import ControlMessageMain from './ControlMessageMain/ControlMessageMain';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import SendImageVideo from './SendImageVideo/SendImageVideo';
import api from '../../../../api/api';
import * as StringUtils from "../../../../utils/StringUtils";
export default function ControlMessage(props) {
    //
    const { user, headers, socket } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            socket: state.socket
        }
    });
    const { dataMessage, setDataMessage, mini, messages, setMessages, choose,
        setGroupMessage, item, setChoose, setMembers, members } = props;
    const groupMessage = props.groupMessage ? props.groupMessage : { color: "#ccc" }
    const refContent = useRef();
    const refPopover = useRef();
    const [type, setType] = useState();
    let count = 0;
    const handleClick = (type, event) => {
        setType(type);
        const current = event.target;
        if (!current) {
            return;
        }
        refPopover.current.style.display = "block";
        window.addEventListener("click", winEv)
    }
    const winEv = function (event) {
        ++count;
        if (count > 1) {
            if (refPopover.current && !refPopover.current.contains(event.target)) {
                refPopover.current.style.display = "none";
                count = 0;
                window.removeEventListener("click", winEv);
            }
        }
    }
    const sendMessage = async (dataMessage) => {
        const id = v4();
        let result = { data: null };
        let newGroupMessage = { data: groupMessage };
        let queryGroupMessage = "";
        if (!groupMessage.id) {
            queryGroupMessage = StringUtils.generateIDGroupFromListUser([...choose, user]);
            if (choose.length >= 2) {
                newGroupMessage = await api(`groupMessages`, 'POST', {
                    id: null,
                    nameGroupMessage: null,
                    theme: null,
                    color: "#ccc",
                    userGroupMessage: user,
                    emoji: "🙆‍♂️",
                    queryGroupMessage: queryGroupMessage,
                    typeGroupMessage: 1,
                    timeCreated: null,
                }, headers);
            }
            else {
                newGroupMessage = await api(`groupMessages/check`, "POST", {
                    string: queryGroupMessage
                }, headers);
            }
        }
        const object = {
            id: id,
            userMessage: user,
            groupMessageMessage: newGroupMessage.data,
            content: dataMessage.content,
            dataMessage: JSON.stringify(dataMessage),
            replyMessage: null,
            typeMessage: dataMessage.type,
            timeCreated: null,
        }
        if (!groupMessage.id) {
            setMembers([...choose].map((dt) => dt.userUserRelationShip));
            if (choose.length >= 2) {
                const allEl = [...choose, user];
                for (let index = 0; index < allEl.length; index++) {
                    const element = allEl[index];
                    result = await api(`messages`, 'POST',
                        {
                            ...object, id: null, typeMessage: -1, userMessage: element.userUserRelationShip ?
                                element.userUserRelationShip : element
                        }, headers);
                }
            }
            setChoose(null);
        }
        setMessages([...messages, { ...object, loading: true }]);
        result = await api(`messages`, 'POST', { ...object, id: null }, headers);
        setMessages([...messages].filter(dt => dt.id !== id).concat([result.data]));
        refContent.current.innerText = "";
        setDataMessage({ type: 0, value: null, content: "" });
        if (groupMessage.id) {
            for (let index = 0; index < members.length; index++) {
                socket.emit(`sendMessage`, result.data);
                socket.emit(`sendMessageOnline`, { send: user, receive: members[index] });
            }
        }
        else {
            setGroupMessage(newGroupMessage.data);
            for (let index = 0; index < members.length; index++) {
                socket.emit(`sendMessage`, result.data);
                socket.emit(`sendMessageOnline`, { send: user, receive: members[index] });
            }
        }
    }
    //
    return (
        <div className={`w-full bg-white dark:bg-dark-second relative z-20 pt-2 pb-3 px-1 flex items-center 
        dark:border-dark-third border-t-2 border-solid border-gray-300 items-end relative ${Array.isArray(choose) ?
                item.new && choose.length === 0 ? 'opacity-50' : '' : ''}`}>
            {Array.isArray(dataMessage.value) ? dataMessage.value.length > 0 &&
                <SendImageVideo dataMessage={dataMessage} setDataMessage={setDataMessage} mini={mini} /> : ""}
            <ControlMessageMain groupMessage={groupMessage} handleClick={handleClick}
                setDataMessage={setDataMessage} dataMessage={dataMessage} sendMessage={sendMessage} />
            <div className="w-9/12 relative">
                <div className="three-exten1 w-full relative">
                    <div ref={refContent} className="place-input-type border-none dark:text-white bg-gray-200 dark:bg-dark-third rounded-full 
                    pl-2 outline-none py-2 break-all w-full" placeholder="Aa" contentEditable={true} spellCheck={false}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                event.preventDefault();
                                sendMessage(dataMessage);
                            }
                        }}
                        style={{ minHeight: "20px" }} onInput={event => setDataMessage({ ...dataMessage, content: event.currentTarget.textContent })}></div>
                    <div onClick={(event) => handleClick(1, event)} className="absolute right-3 top-1/2 transform -translate-y-1/2 flex cursor-pointer z-50"><i
                        className="fas fa-smile dark:text-white text-gray-600 text-2xl"></i></div>
                    <div ref={refPopover} className='absolute hidden bottom-full bg-white border-2 border-solid border-gray-200 shadow-lv1 
                    right-0 rounded-lg w-72' style={{ height: 360 }}>
                        {type === 1 ? <PopoverEmojii handleClick={(item) => {
                            refContent.current.innerText += item;
                            functions.placeCaretAtEnd(refContent.current);
                            setDataMessage({ ...dataMessage, content: dataMessage.content + item })
                        }} /> : <PopoverSticker handleClick={(item) => {
                            sendMessage({ ...dataMessage, type: 2, value: item });
                            refPopover.current.style.display = 'none';
                            count = 0;
                        }} />}
                    </div>
                </div>
            </div>
            <div className="w-12 zoom flex jusitfy-center">
                <span onClick={() => sendMessage({ type: 0, value: "", content: groupMessage.emoji })}
                    className="cursor-pointer zoom text-xl flex items-center">{groupMessage.emoji}</span>
            </div>
            {item && item.new && <div className='w-full absolute opacity-50 top-0 left-0 z-50' style={{ height: 66 }}>

            </div>}
        </div>
    )
}
