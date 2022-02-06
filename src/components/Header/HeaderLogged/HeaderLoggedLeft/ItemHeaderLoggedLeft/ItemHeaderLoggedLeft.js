import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PROFILE } from '../../../../../constants/Config';

export default function ItemHeaderLoggedLeft(props) {
    //
    const navigation = useNavigate();
    const { item } = props;
    //
    return <ul onClick={() => navigation(PAGE_PROFILE + "/" + item.id)} className="w-full relative flex py-2">
        <li className="pl-3">
            <img className="w-11 h-11 object-cover rounded-full p-0.5"
                src={item.avatar} alt="" />
        </li>
        <li className="pl-3 items-center font-bold dark:text-white py-2.5">
            {`${item.firstName} ${item.lastName}`}
        </li>
    </ul>;
}
