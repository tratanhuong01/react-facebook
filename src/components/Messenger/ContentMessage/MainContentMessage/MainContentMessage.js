import React from 'react'

export default function MainContentMessage() {
    return (
        <div className="w-full p-1 flex flex-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative">
            <div className='w-full'>
                <div className="w-full p-2 text-center">
                    <div className="w-16 h-16 relative mx-auto">
                        <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1627385490/Messenger/AvatarUpdate/1000000025.jpg"
                            className="w-16 h-16 rounded-full object-cover mx-auto" alt="" />
                    </div>
                    <p className="text-center text-gray-900 font-semibold dark:text-white">
                        <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">Ensonet</span>
                        <br />
                        <span className="text-sm font-semibold dark:text-gray-300">
                            Các bạn hiện là bạn bè trên Ensonet
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
