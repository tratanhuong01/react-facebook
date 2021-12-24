import React from 'react'
import foregroundStory from '../../../config/foregroundStory'

export default function ColorTextList() {
    return (
        <div className="w-full">
            <div className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white 
                            max-h-40 mb-2 wrapper-content-right overflow-y-auto dark:border-dark-third shadow-xl">
                <p className="font-bold text-xm py-1 px-2 dark:text-white">Màu chữ</p>
                <ul className="w-full pl-2 flex flex-wrap h-32 max-h-32 overflow-y-auto" >
                    {foregroundStory.map((item, index) =>
                        <li key={index} className={`cursor-pointer w-8 h-8 cursor-pointer m-1 
                                        rounded-full`} style={{ backgroundColor: item.color }}></li>)}
                </ul>
            </div>
        </div>
    )
}
