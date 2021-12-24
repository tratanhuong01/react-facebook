import React, { useState } from 'react'
import StoryLeft from '../../components/Story/StoryLeft/StoryLeft';
import StoryRight from '../../components/Story/StoryRight/StoryRight';
import { StoryProvider } from '../../contexts/StoryContext/StoryContext';
import WrapperLogged from '../WrapperLogged';

export default function ViewStory() {
    //
    const [fullScreen, setFullScreen] = useState(false);
    //
    return (
        <WrapperLogged>
            <div className="w-full flex h-screen z-10 pt-16 bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full" id="content">
                <StoryProvider>
                    <div className={`w-1/4 bg-white h-full dark:bg-dark-second p-4 shadow-2xl 
                        wrapper-content-right overflow-y-auto ${fullScreen ? 'hidden' : ''}`}>
                        <StoryLeft fullScreen={fullScreen} setFullScreen={setFullScreen} />
                    </div>
                    <StoryRight fullScreen={fullScreen} />
                    <div onClick={() => setFullScreen(!fullScreen)} className={`text-2xl w-10 h-10 rounded-full bg-gray-200 
                        cursor-pointer ${fullScreen ? 'fixed top-20 left-3 z-50' : 'hidden'} hover:bg-gray-300
                        flex justify-center items-center dark:bg-dark-main dark:text-white dark:hover:bg-dark-third`}>
                        <i className={`bx bx-${fullScreen ? 'exit-' : ''}fullscreen`} ></i>
                    </div>
                </StoryProvider>
            </div>
        </WrapperLogged>
    )
}