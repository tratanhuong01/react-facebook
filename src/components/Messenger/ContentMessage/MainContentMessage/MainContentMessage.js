import React from 'react'

export default function MainContentMessage(props) {
    //
    const { messages, item } = props;
    //
    return (
        <div className="w-full p-1 flex flex-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative">
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
                    ""}
            </div>
        </div>
    )
}
