import React from 'react'
import ContentMessageTop from '../Messenger/ContentMessage/ContentMessageTop/ContentMessageTop'
import ControlMessage from '../Messenger/ContentMessage/ControlMessage/ControlMessage'
import MainContentMessage from '../Messenger/ContentMessage/MainContentMessage/MainContentMessage'

export default function ItemChat(props) {
    //
    const { item } = props;
    //  
    return (
        <div className="relative bg-white m-2 dark:bg-dark-second rounded-lg dark:border-dark-third 
        border-2 border-solid border-gray-300 ml-auto" style={{ width: 340, height: 486 }}>
            <div className='w-full h-full flex flex-col'>
                <ContentMessageTop mini={true} item={item} />
                <MainContentMessage />
                <ControlMessage />
            </div>
        </div>
    )
}
