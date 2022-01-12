import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../../../api/api';
import MessageList from '../../../../Messenger/MessageList/MessengerList'

export default function PopoverMessage() {
    //
    const { headers, user } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const [allMessage, setAllMessage] = useState();
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`messages/getList?idUser=${user.id}&offset=${0}&limit=5`, "GET", null, headers);
            if (unmounted) return;
            setAllMessage(result.data);
        }
        if (user) {
            fetch()
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    //
    return (
        <div className='w-full p-2 rounded-lg' style={{ height: 725 }}>
            {allMessage ? <MessageList allMessage={allMessage} mini={true} /> : "loading"}
        </div>
    )
}
