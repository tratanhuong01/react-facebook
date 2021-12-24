import React, { useContext } from 'react'
import backgroundStory from '../../../config/backgroundStory'
import { StoryEditorContext } from '../../../contexts/StoryEditorContext/StoryEditorContext'

export default function BackgroundStoryList() {
    //
    const { storyEditor: { data }, storyEditorsDispatch, storyEditorsAction } = useContext(StoryEditorContext);
    //
    return (
        <div className="w-full pb-4 border-2 border-solid border-gray-200 rounded-lg 
        wrapper-content-right overflow-y-auto dark:border-dark-third shadow-xl"
            style={{ maxHeight: 220, height: 220 }}>
            <p className="font-bold text-xm p-2 dark:text-white">Phông nền</p>
            <ul className="w-full pl-2 flex flex-wrap ">
                {backgroundStory.map(item =>
                    <li onClick={() => {
                        storyEditorsDispatch(storyEditorsAction.updateData('data', item))
                    }} key={item.id} className={`cursor-pointer w-10 h-10 rounded-full 
                    ${data ? item.id === data.id ? ' border-gray-600' : 'border-white' : 'border-white'} border-2 border-solid`}>
                        <img className="w-9 h-9 p-1 rounded-full" src={item.src} alt="" />
                    </li>)}
            </ul>
        </div>
    )
}
