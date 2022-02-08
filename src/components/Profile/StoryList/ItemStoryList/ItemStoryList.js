import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemStoryList(props) {
    //
    const { story } = props;
    //
    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative story-picVid">
            <div className="p-2.5 my-2" style={{ height: 284 }}>
                <Link to="">
                    <img className="bg-gray-300"
                        src={story.src}
                        alt="" />
                </Link>
            </div>
            <span className="font-bold text-white absolute top-4 left-4 text-sm" style={{ lineHeight: 35, color: "black", fontSize: 14 }}>
                21 tháng 12
                <i className="fas fa-circle text-xm px-2" style={{ color: " #1876F2", fontSize: 12 }}></i></span>
            <span className="views-story absolute text-black" style={{ display: "none", bottom: 10, left: 24 }}>
                <i className="fas fa-eye"></i>&nbsp;&nbsp;1</span>
        </div>
    )
}
