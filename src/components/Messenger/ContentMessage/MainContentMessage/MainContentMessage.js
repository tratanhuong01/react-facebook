import React, { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import ItemMessageLeft from '../../ItemMessage/ItemMessageLeft/ItemMessageLeft';
import ItemMessageRight from '../../ItemMessage/ItemMessageRight/ItemMessageRight';

export default memo(function MainContentMessage(props) {
    //
    const { messages, item } = props;
    const user = useSelector((state) => state.user);
    const refContentMessage = useRef();
    useEffect(() => {
        //
        if (refContentMessage.current) {
            refContentMessage.current.scrollTop = refContentMessage.current.scrollHeight;
        }
        //
    }, [refContentMessage, messages])
    //
    return (
        <div ref={refContentMessage} className="w-full p-1 flex-1 wrapper-content-right overflow-y-auto overflow-x-hidden
         relative" style={{ scrollBehavior: "unset" }}>
            <div className='w-full'>
                {messages === null ? "loading" : messages.length === 0 ?
                    <div className="w-full p-2 text-center">
                        <div className="w-16 h-16 relative mx-auto">
                            <img src={item.avatar}
                                className="w-16 h-16 rounded-full object-cover mx-auto" alt="" />
                        </div>
                        <p className="text-center text-gray-900 font-semibold dark:text-white">
                            <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">Facebook</span>
                            <br />
                            <span className="text-sm font-semibold dark:text-gray-300">
                                Các bạn hiện là bạn bè trên Ensonet
                            </span>
                        </p>
                    </div> :
                    messages.map(item => {
                        if (item.userMessage.id === user.id)
                            return <ItemMessageRight key={item.id} item={item} />;
                        else
                            return <ItemMessageLeft key={item.id} item={item} />;
                    })}
            </div>
        </div >
    )
})
