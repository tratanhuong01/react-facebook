import React from 'react'
import ContentMessageTop from '../Messenger/ContentMessage/ContentMessageTop/ContentMessageTop';
import ControlMessage from '../Messenger/ContentMessage/ControlMessage/ControlMessage';

export default function WrapperItemChat(props) {
    //
    const { groupMessage, mini, dataMessage, messages, setDataMessage,
        setMessages, item, show, setShow } = props;
    //
    return (
        <div className="relative bg-white m-2 dark:bg-dark-second rounded-lg dark:border-dark-third 
        border-2 border-solid border-gray-300 ml-auto" style={{ width: 340, height: 486 }}>
            <div className='w-full h-full flex flex-col'>
                <ContentMessageTop mini={mini} item={item} groupMessage={groupMessage}
                    setShow={setShow} show={show} />
                {props.children}
                <ControlMessage groupMessage={groupMessage} dataMessage={dataMessage} messages={messages}
                    setDataMessage={setDataMessage} mini={mini} setMessages={setMessages} chatter={item} />
            </div>
        </div>
    )
}
