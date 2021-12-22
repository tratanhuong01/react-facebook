import React from 'react'
import ContentStory from './ContentStory/ContentStory'

export default function StoryRight(props) {
    //
    const { fullScreen } = props;
    //
    return (
        <div className={`${fullScreen ? 'w-full' : 'w-3/4'} bg-black dark:bg-dark-main story-right`}
            style={{ height: "calc(100%)" }}>
            < div className="w-full flex overflow-y-auto h-full" >
                <div className={`${fullScreen ? 'w-1/2' : 'w-2/3'} px-5 mx-auto h-full relative top-2 left-20 flex`}>
                    <div className="w-1/12 pr-4 flex items-center justify-center h-full">
                        <i className="fas fa-chevron-left cursor-pointer text-gray-500 px-5 py-3 bg-gray-300 rounded-full 
                            hover:text-black hover:bg-white text-xl "></i>
                    </div>
                    <ContentStory />
                    <div className="w-1/12 pl-4 flex items-center justify-center h-full">
                        <i className="fas fa-chevron-right cursor-pointer text-gray-500 px-5 py-3 bg-gray-300 rounded-full 
                            hover:text-black hover:bg-white text-xl " ></i>
                    </div>
                </div>
            </div >
        </div >
    )
}
