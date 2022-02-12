import React from 'react'

export default function CircleIcon({ className, handleClick }) {
    //
    //
    return (
        <span onClick={() => {
            if (typeof handleClick === "function") {
                handleClick();
            }
        }} className={`${className} rounded-full flex items-center justify-center cursor-pointer`}>
        </span>
    )
}
