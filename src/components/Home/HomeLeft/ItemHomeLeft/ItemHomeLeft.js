import React from 'react'

export default function ItemHomeLeft(props) {
    //
    const { image, label } = props;
    //
    return (
        <li
            className="cursor-pointer w-full hover:bg-gray-200 flex px-2.5 py-2 dark:hover:bg-dark-third">
            <img className="w-9 object-contain h-9 mr-4" src={image} alt="" srcSet="" />
            <span className="flex items-center dark:text-white">{label}</span>
        </li>
    )
}
