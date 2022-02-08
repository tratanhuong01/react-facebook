import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ItemHomeLeft(props) {
    //
    const user = useSelector((state => state.user));
    const { image, label, link } = props;
    const navigation = useNavigate();
    //
    return (
        <li
            onClick={() => {
                if (link && typeof link === "function") {
                    navigation(link(user.id));
                }
            }}
            className="cursor-pointer w-full hover:bg-gray-200 flex rounded-lg px-2.5 py-2 dark:hover:bg-dark-third">
            <img className="w-9 object-contain h-9 mr-4" src={image} alt="" srcSet="" />
            <span className="flex items-center dark:text-white">{label}</span>
        </li>
    )
}
