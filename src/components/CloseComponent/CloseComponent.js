import React from 'react'

export default function CloseComponent({ className, data, size, handleClick, children }) {
    //
    //
    return (
        <div onClick={() => handleClick(data)} className={` ${size ? size : 'text-xl'} ${className ? className :
            ' w-8 h-8 top-2 right-2'} rounded-full shadow-lv1 flex justify-center items-center cursor-pointer bg-gray-200 
            hover:bg-gray-300 z-10 dark:bg-dark-third hover:bg-dark-second absolute`}>
            {children}
        </div>
    )
}
