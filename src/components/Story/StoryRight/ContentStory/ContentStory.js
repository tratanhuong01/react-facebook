import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom'
import allFeel from "../../../../config/feels";
import InfoStory from '../InfoStory/InfoStory';

export default function ContentStory() {
    //
    const [show, setShow] = useState(false);
    //
    return (
        <div className="w-7/12 story-right bg-gray-400 mt-5 relative m-2 rounded-lg relative"
            style={{ height: "calc(100% - 90px)" }}>
            <img src="https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png"
                className="w-full img-story my-2 object-cover" alt="" style={{ height: "calc(100% - 80px)" }} />
            <div className="w-full py-1 px-2 absolute top-1">
                <div className="w-full pb-2">
                    <ul className="w-full flex">
                        <li className="w-50% bg-gray-300 mr-1 cursor-pointer">
                            <div className="bg-white py-0.5 w-0" style={{ width: "59.6%" }}>
                            </div>
                        </li>
                        <li className="w-50% bg-gray-300 mr-1 cursor-pointer">
                            <div className="bg-white py-0.5 w-0"></div>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex">
                    <div className="w-2/12">
                        <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                            className="w-12 h-12 object-cover rounded-full p-1" alt="" />
                    </div>
                    <div className="w-1/2 pt-1">
                        <p className="pb-1"><Link to="" className="font-bold text-white">Trà Hưởng</Link>
                            &nbsp;<span className="text-sm text-white" >
                                15 giờ
                            </span></p>
                        <p className="text-white text-sm">Mod(Remix) </p>
                    </div>
                    <div className="w-1/3">
                        <ul className="w-full flex relative">
                            <li id="play" className=" py-2 px-2 cursor-pointer">
                                <i id="btnClickStart"
                                    className="text-white text-2xl far fa-stop-circle"></i>
                            </li>
                            <li onclick="muteAudio()" className=" py-2 px-2 cursor-pointer">
                                <i id="muteOrUnMute" className="fas fa-volume-up text-white text-2xl"></i>
                            </li>
                            <li onclick="openEditStory()" className="py-2 px-2 cursor-pointer">
                                <i className="fas fa-ellipsis-h text-white text-2xl"></i>
                            </li>
                            <div className="w-80 right-2 top-12 absolute bg-gray-200 border-2 dark:bg-dark-third dark:text-white font-bold border-solid 
                            border-gray-300 dark:border-dark-second z-50 rounded-lg hidden">
                                <ul className="w-full">
                                    <li className="w-full px-2.5 py-2 dark:bg-dark-third bg-gray-200 
                                    hover:bg-gray-300 dark:hover:bg-dark-second cursor-pointer">
                                        <div className="flex items-center">
                                            <i className="far fa-trash-alt text-2xl mr-3"></i>
                                            Xóa ảnh
                                        </div>
                                    </li>
                                    <li className="w-full px-2.5 py-2 dark:bg-dark-third bg-gray-200 
                                    hover:bg-gray-300 dark:hover:bg-dark-second cursor-pointer">
                                        <div className="flex items-center">
                                            <i className="fas fa-exclamation-triangle text-2xl mr-3"></i>
                                            Đã xảy ra lỗi
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <ScrollContainer className="hidden w-full p-2 absolute bottom-2 flex max-w-full overflow-x-auto">
                <div className="w-10/12 relative flex-shrink-0 flex items-center">
                    <input type="text" name="" id="" placeholder="Trả lời.."
                        className="w-full p-2 rounded-3xl bg-black bg-opacity-50 text-white" />
                    <i
                        className="far fa-paper-plane cursor-pointer absolute right-4 top-0.5 text-2xl 
                        text-gray-200"></i>
                </div>
                <div className='flex gap-2 items-center ml-3'>
                    {allFeel.map((feel, index) =>
                        <img src={feel.image} key={index} className='w-8 flex-shrink-0 flex h-8 rounded-full cursor-pointer'
                            alt='' />)}
                </div>
            </ScrollContainer>
            {!show && <div onClick={() => setShow(true)} className='absolute -bottom-12 cursor-pointer left-2 p-2 z-50'>
                <div className='mb-7 -ml-2  border-b-2 border-gray-200 border-solid'>
                    <i className='bx bx-chevron-left transform text-white rotate-90 mb-0 text-2xl' ></i>
                    <br></br>
                    <span className='text-white font-semibold mt-2'>4 người xem</span>
                </div>
                <div className='flex pl-2'>
                    <img src='https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png'
                        alt='' className='w-7 h-7 rounded-full -ml-2 z-30 object-cover border-white border-2 
                        border-solid' />
                    <img src='http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg'
                        alt='' className='w-7 h-7 rounded-full -ml-2 z-20 object-cover border-white border-2 
                        border-solid' />
                    <img src='https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png'
                        alt='' className='w-7 h-7 rounded-full -ml-2 z-10 object-cover border-white border-2 
                        border-solid' />
                </div>
            </div>}
            <div className="w-1/4 bg-white flex p-1.5 absolute top-32 left-24 rounded-lg"
                style={{ transform: "rotate(-25deg)" }}>
                <div className="w-1/4 pr-2">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1639970050/Story/pxhxin9ywl1ii7u7qped.png"
                        alt="" />
                </div>
                <div className="w-3/4">
                    <p className="font-bold" style={{ fontSize: 7 }}>បទកំពុងល្បី 24kgoldn - Mood</p>
                    <p className="font-sm" style={{ fontSize: 5 }}>24kgoldn</p>
                </div>
            </div>
            {show && <InfoStory setShow={setShow} />}
        </div>
    )
}
