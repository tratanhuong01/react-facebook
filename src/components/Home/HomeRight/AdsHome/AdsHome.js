import React from 'react'
import { Link } from 'react-router-dom'

export default function AdsHome() {
    return (
        <div className="w-full">
            <p className="font-bold dark:text-white pt-2.5">Được tài trợ</p>
            <div className="w-full flex mx-0 my-4">
                <img className="w-32 h-32 object-contain rounded-lg"
                    src="https://res.cloudinary.com/tratahuong01/image/upload/v1620001760/Avatar/p5vqncs5a5wdc1tv4kl9.jpg" alt="" />
                <div className="block my-9 mx-2.5">
                    <span><Link to="" className="dark:text-white font-bold">Didongviet</Link></span> <br />
                    <span><Link className="text-xs dark:text-white" to="">didongviet.vn</Link></span>
                </div>
            </div>
            <div className="w-full flex mx-0 my-4">
                <img className="w-32 h-32 object-contain rounded-lg"
                    src="https://res.cloudinary.com/tratahuong01/image/upload/v1620001760/Avatar/p5vqncs5a5wdc1tv4kl9.jpg" alt="" />
                <div className="block my-9 mx-2.5">
                    <span><Link to="" className="dark:text-white font-bold">Didongviet</Link></span> <br />
                    <span><Link className="text-xs dark:text-white" to="">didongviet.vn</Link></span>
                </div>
            </div>
        </div>
    )
}
