import React from 'react'

export default function ItemChatMinize() {
    return (
        <div className="scroll-user w-14 h-14 relative my-3" >
            <img className="shadow-2xl w-14 h-14 shadow-lv1 rounded-full mx-auto object-cover"
                src="http://res.cloudinary.com/tratahuong01/image/upload/v1621170459/Avatar/z9slpz5pmqv4rniswiae.png" alt="" />
            <span className="close-scroll-user hidden text-xm py-0.5 px-2 font-bold rounded-full absolute -top-2
            -right-1 bg-white">&times;</span>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-solid  border-white rounded-full absolute 
            bottom-0 -right-1 bg-green-500"></span>
        </div >
    )
}
