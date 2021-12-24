import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import stories from '../../../config/stories'
import { PAGE_CREATE_STORY } from '../../../constants/Config'
import ItemPost from '../../ItemPost/ItemPost'
import WritePost from '../../WritePost/WritePost'
import ItemStory from './ItemStory/ItemStory'
import MeetRom from './MeetRom/MeetRom'

export default function HomeCenter() {
    //
    const navigation = useNavigate();
    const user = useSelector((state) => state.user);
    //
    return (
        <div className="center-content relative left-0 px-2 w-full sm:mx-auto md:w-3/4 lg:mx-0 
            lg:w-4/6 lg:left-0! xl:w-1/2 xl:px-8 xl:left-1/4">
            <div className="flex my-4 relative gap-1">
                <div onClick={() => navigation(PAGE_CREATE_STORY)} className="flex-shrink-0 w-1/4 md:w-1/6 px-1 pl-0 relative text-center h-44 cursor-pointer">
                    <img className="w-full rounded-t-lg object-cover" style={{ height: 125 }}
                        src={user.avatar}
                        alt="" />
                    <div className="w-full rounded-b-lg bg-white dark:bg-dark-second relative" style={{ height: 50 }}>
                        <div className="w-11 h-11 rounded-full border-4 border-solid border-white dark:border-dark-second 
                        absolute dark:bg-dark-second bottom-0 pt-1 bg-main left-1/2 transform -translate-x-1/2 -top-5 -mr-2 ">
                            <i className="fas fa-plus pt-1.5 text-white"></i>
                        </div>
                        <p className="text-center text-sm font-bold pt-6 pb-0 dark:text-white">Tạo Tin</p>
                    </div>
                </div>
                {[...stories].slice(0, 5).map((story, index) => <ItemStory key={index} story={story}
                    nearLast={index === 3 ? 'hidden lg:block' : ''} last={index === 4 ? 'hidden md:block' : ''}
                    length={[...stories].slice(0, 5).length} index={index} />)}
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
