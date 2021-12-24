import React, { useState } from 'react'

const categories = [
    {
        id: 0,
        label: "Bài viết",
        link: ""
    },
    {
        id: 1,
        label: "Giới thiệu",
        link: ""
    },
    {
        id: 2,
        label: "Bạn bè",
        link: ""
    },
    {
        id: 3,
        label: "Ảnh",
        link: ""
    },
    {
        id: 4,
        label: "Video",
        link: ""
    },
    {
        id: 5,
        label: "Check in",
        link: ""
    },
]

export default function CategoryProfile() {
    //
    const [active, setActive] = useState(0);
    //
    return (
        <div className="w-full relative">
            <ul className="w-full flex py-1">
                {categories.map(category =>
                    <li onClick={() => setActive(category.id)} key={category.id} className={`text-center py-4 px-4 cursor-pointer 
                    border-b-4 dark:text-white font-semibold  ${active === category.id ? `text-blue-500 border-blue-500 
                    rounded-t-lg` : 'rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-third border-white dark:border-dark-second'}  `}>
                        {category.label}
                    </li>
                )}
            </ul>
            <div className="px-4 py-1.5 cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 absolute top-1/2 transform -translate-y-1/2 right-2">
                <i className='bx bx-dots-horizontal-rounded text-2xl' ></i>
            </div>
        </div>
    )
}
