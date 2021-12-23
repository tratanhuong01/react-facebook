import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PAGE_STORY } from '../../../../constants/Config';

export default function ItemStory(props) {
    //
    const { last, nearLast, story } = props;
    const navigation = useNavigate();
    //
    return (
        <div onClick={() => navigation(PAGE_STORY)} className={`w-1/4 md:w-1/6 ${last ? 'hidden lg:block' : nearLast ? 'hidden md:block' : ''}`}>
            <div className="h-44 rounded-xl overflow-hidden relative cursor-pointer flex-shrink-0 
            bg-black border-2 border-solid border-gray-200 shadow-lv1">
                <div className="relative h-full group cursor-pointer">
                    <img className="group-hover:transform group-hover:scale-110 transition-all duration-700 
                        h-full w-full object-cover "
                        src={story.imageList[0].src}
                        alt="" />
                </div>
                <div className="w-full absolute text-left pl-1.5 break-all bottom-2">
                    <b className="text-white text-sm">{story.fullName}</b>
                </div>
                <div className="w-full text-left absolute top-2 left-1">
                    <img className="w-10 h-10 rounded-full object-cover border-4 border-solid border-blue-500 "
                        src={story.avatar}
                        alt="" />
                </div>
            </div>
        </div>
    )
}
