import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function ButtonComponent({
    link, className, type, disabled, handleClick, bgColor, loading, children }) {
    //
    const ref = useRef();
    useEffect(() => {
        //
        if (link) {
            if (disabled) {
                ref.current.removeAttribute('href');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, disabled]);
    //
    return (
        link
            ?
            (<Link ref={ref} to={link} className={`${className} border-solid`}>
                {children}
            </Link>)
            :
            (<button type={type} onClick={() => {
                if (typeof handleClick === "function" && !disabled) {
                    handleClick();
                }
            }} className={`${className} border-solid cursor-pointer 
            ${disabled ? 'cursor-not-allowed bg-gray-500 text-gray-100' : bgColor} `} disabled={disabled}>
                {loading ? <span className='text-white bx bx-shape-circle fa-spin'></span>
                    : children}
            </button>)
    )
}
