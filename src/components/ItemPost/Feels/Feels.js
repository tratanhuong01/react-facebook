import React from 'react'
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import allFeel from "../../../config/feels";

export default function Feels(props) {
    //
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const { setFeel, feel, comment, setFeelLength, feelLength, post } = props;
    const handleFeel = async (feelRe, index) => {
        if (feel) {
            const result = await api(`feelPosts`, 'PUT', { ...feel, content: JSON.stringify(feelRe), typeFeelPost: index }, headers);
            setFeel(result.data);
        }
        else {
            const result = await api(`feelPosts`, 'POST', {
                id: null,
                postFeelPost: post,
                userFeelPost: user,
                content: JSON.stringify(feelRe),
                typeFeelPost: index,
                timeCreated: null
            }, headers);
            setFeel(result.data);
            setFeelLength(feelLength + 1);
        }
    }
    //
    return (
        <div className="p-2 z-40 absolute bottom-full item__block -left-4" style={{ width: comment ? 340 : 'auto' }}>
            <ul className="flex flex-column dark:bg-dark-second bg-white rounded-full border-solid 
                        dark:border-dark-third border-gray-300 border rounded-3xl">
                {allFeel.map((feel, index) =>
                    <li onClick={() => handleFeel(feel, index)} key={index} className="p-1 cursor-pointer rounded-full hover:bg-gray-200 
                    dark:hover:bg-dark-third relative item__hover">
                        <span className="p-1 text-xs item__block rounded-full hidden bg-black text-white font-semibold 
                        absolute bottom-full mb-2 left-0"
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}>
                            {feel.label}
                        </span>
                        <img src={feel.image} alt="" className={`w-10 h-10 hover:w-11 hover:w-11 rounded-full object-cover`} />
                    </li>
                )}
            </ul>
        </div>
    )
}
