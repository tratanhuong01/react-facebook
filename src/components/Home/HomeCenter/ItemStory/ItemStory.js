import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PAGE_STORY } from '../../../../constants/Config';

export default function ItemStory(props) {
    //
    const { last, nearLast } = props;
    const navigation = useNavigate();
    //
    return (
        <div onClick={() => navigation(PAGE_STORY)} className={`w-1/4 md:w-1/6 ${last ? 'hidden lg:block' : nearLast ? 'hidden md:block' : ''}`}>
            <div className="h-44 rounded-xl overflow-hidden relative cursor-pointer flex-shrink-0 
            bg-black border-2 border-solid border-gray-200 shadow-lv1">
                <div className="relative h-full group cursor-pointer">
                    <img className="group-hover:transform group-hover:scale-110 transition-all duration-700 
                        h-full w-full object-cover "
                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/269598043_3071191429830703_3091086871323485121_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=5b7eaf&_nc_ohc=r880DieY4_QAX8K38Bv&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9cdbyzxVDCdwp3jCBsHsoBxpc_N1c77PIRMur991O37w&oe=61C502EF"
                        alt="" />
                </div>
                <div className="w-full absolute text-left pl-1.5 break-all bottom-2">
                    <b className="text-white text-sm">Trà Hưởng</b>
                </div>
                <div className="w-full text-left absolute top-2 left-1">
                    <img className="w-10 h-10 rounded-full object-cover border-4 border-solid border-blue-500 "
                        src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" />
                </div>
            </div>
        </div>
    )
}
