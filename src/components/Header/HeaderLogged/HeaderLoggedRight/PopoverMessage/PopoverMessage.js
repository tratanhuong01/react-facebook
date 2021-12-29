import React from 'react'
import MessageList from '../../../../Messenger/MessageList/MessengerList'

export default function PopoverMessage() {
    return (
        <div className='w-full p-2 rounded-lg' style={{ height: 725 }}>
            <MessageList />
        </div>
    )
}
