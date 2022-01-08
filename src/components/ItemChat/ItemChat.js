import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../api/api'
import ContentMessageTop from '../Messenger/ContentMessage/ContentMessageTop/ContentMessageTop'
import ControlMessage from '../Messenger/ContentMessage/ControlMessage/ControlMessage'
import MainContentMessage from '../Messenger/ContentMessage/MainContentMessage/MainContentMessage'

export default function ItemChat(props) {
    //
    const { item } = props;
    const { user, headers } = useSelector(state => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    const [groupMessage, setGroupMessage] = useState(null);
    const [messages, setMessages] = useState(null);
    const generateString = () => {
        const array = [user.id, item.id];
        array.sort();
        let string = "";
        for (let index = 1; index <= array.length; index++) {
            const element = array[index - 1];
            string += element + (index === array.length ? '' : '-');
        }
        return string;
    }
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const groupMessage = await api(`groupMessages/check`, "POST", { string: generateString() }, headers);
            let messagesResult = { data: null };
            if (groupMessage.data) {
                messagesResult = await api(`messages?idGroupMessage=${groupMessage.data.id}`, 'GET', null, headers);
            }
            if (unmounted) return;
            setGroupMessage(groupMessage.data);
            setMessages(messagesResult.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //  
    return (
        <div className="relative bg-white m-2 dark:bg-dark-second rounded-lg dark:border-dark-third 
        border-2 border-solid border-gray-300 ml-auto" style={{ width: 340, height: 486 }}>
            {groupMessage && <div className='w-full h-full flex flex-col'>
                <ContentMessageTop mini={true} item={item} groupMessage={groupMessage} />
                <MainContentMessage messages={messages} item={item} />
                <ControlMessage groupMessage={groupMessage} />
            </div>}
        </div>
    )
}
