import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PAGE_CREATE_STORY, PAGE_STORY } from '../../../constants/Config'
import ItemPost from '../../ItemPost/ItemPost'
import WritePost from '../../WritePost/WritePost'
import ItemStory from './ItemStory/ItemStory'
import MeetRom from './MeetRom/MeetRom'

export default function HomeCenter() {
    //
    const navigation = useNavigate();
    //
    return (
        <div className="center-content relative left-0 px-2 sm:w-full sm:mx-auto md:w-3/4 lg:mx-0 
            lg:w-4/6 lg:left-0! xl:w-1/2 xl:px-8 xl:left-1/4">
            <div className="flex my-4 relative gap-1">
                <div onClick={() => navigation(PAGE_CREATE_STORY)} className="flex-shrink-0 w-1/4 md:w-1/6 px-1 pl-0 relative text-center h-44 cursor-pointer">
                    <img className="w-full rounded-t-lg object-cover" style={{ height: 125 }}
                        src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" />
                    <div className="w-full rounded-b-lg bg-white dark:bg-dark-second relative" style={{ height: 50 }}>
                        <div className="w-11 h-11 rounded-full border-4 border-solid border-white dark:border-dark-second 
                        absolute dark:bg-dark-second bottom-0 pt-1 bg-main left-1/2 transform -translate-x-1/2 -top-5 -mr-2 ">
                            <i className="fas fa-plus pt-1.5 text-white"></i>
                        </div>
                        <p className="text-center text-sm font-bold pt-6 pb-0 dark:text-white">Tạo Tin</p>
                    </div>
                </div>
                <ItemStory />
                <ItemStory />
                <ItemStory />
                <ItemStory nearLast={true} />
                <ItemStory last={true} />
                <div onClick={() => navigation(PAGE_STORY)} className="w-10 h-10 absolute top-1/2 transform -translate-y-1/2 -mt-1 -right-4 rounded-full dark:bg-dark-third 
                    cursor-pointer z-20 text-center flex justify-center items-center bg-white text-gray-700 shadow-lv1" >
                    <i className="bx bx-right-arrow-alt text-2xl dark:text-white"></i>
                </div>
            </div>
            <WritePost />
            <MeetRom />
            <ItemPost />
            <ItemPost />
            <ItemPost />
            <ItemPost />
            <ItemPost />
        </div>
    )
}
