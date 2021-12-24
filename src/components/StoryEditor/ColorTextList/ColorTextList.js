import React, { useContext } from 'react'
import foregroundStory from '../../../config/foregroundStory'
import { StoryEditorContext } from '../../../contexts/StoryEditorContext/StoryEditorContext'

export default function ColorTextList() {
    //
    const { storyEditor: { color }, storyEditorsDispatch, storyEditorsAction } = useContext(StoryEditorContext);
    //
    return (
        <div className="w-full">
            <div className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white dark:bg-dark-third
                            max-h-40 mb-2 wrapper-content-right overflow-y-auto dark:border-dark-third shadow-xl">
                <p className="font-bold text-xm py-1 px-2 dark:text-white">Màu chữ</p>
                <ul className="w-full pl-2 flex flex-wrap h-32 max-h-32 overflow-y-auto" >
                    <li onClick={() => {
                        storyEditorsDispatch(storyEditorsAction.updateData('color', null))
                    }} className={`cursor-pointer flex items-center dark:text-white justify-center w-8 h-8 bx bx-x cursor-pointer m-1 rounded-full border-2 border-solid 
                        ${color === null ? 'border-gray-500' : 'border-white'}`}></li>
                    {foregroundStory.map((item, index) =>
                        <li key={index} onClick={() => {
                            storyEditorsDispatch(storyEditorsAction.updateData('color', item))
                        }} className={`cursor-pointer w-8 h-8 cursor-pointer m-1 rounded-full border-2 border-solid 
                        ${color ? color.id === item.id ? 'border-gray-500' : 'border-white' : 'border-white'}`}
                            style={{ backgroundColor: item.color }}></li>
                    )}
                </ul>
            </div>
        </div>
    )
}
