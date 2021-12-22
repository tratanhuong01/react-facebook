import React from 'react'
import ButtonComponent from '../../../ButtonComponent/ButtonComponent'

export default function MeetRom() {
    return (
        <div className="my-5 shadow-lv1 w-full flex items-center px-3 py-3 bg-white dark:bg-dark-third rounded-lg">
            <ButtonComponent className="text-blue-500 text-sm rounded-full border border-solid 
            border-gray-200 flex py-1.5 px-5 hover:bg-gray-100 font-semibold 
            flex items-center justify-center">
                <i className='bx bxs-video-plus text-2xl mr-3' style={{ color: "#AB4CB3" }}></i>
                <span>Tạo phòng hop mặt</span>
            </ButtonComponent>
            <ul className="mx-4 flex gap-3">
                <li className="w-10 h-10 flex-shrink-0 rounded-full relative cursor-pointer">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" className="w-full h-full rounded-full object-cover" />
                    <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
                </li>
                <li className="w-10 h-10 flex-shrink-0 rounded-full relative cursor-pointer">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" className="w-full h-full rounded-full object-cover" />
                    <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
                </li>
                <li className="w-10 h-10 flex-shrink-0 rounded-full relative cursor-pointer">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" className="w-full h-full rounded-full object-cover" />
                    <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
                </li>
                <li className="w-10 h-10 flex-shrink-0 rounded-full relative cursor-pointer">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" className="w-full h-full rounded-full object-cover" />
                    <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
                </li>
            </ul>
        </div >
    )
}
