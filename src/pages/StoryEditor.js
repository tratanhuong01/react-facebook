import React from 'react'
import { Link } from 'react-router-dom'
import WrapperLogged from './WrapperLogged'
export default function StoryEditor() {
    return (
        <WrapperLogged>
            <div className="w-full flex z-10 pt-16 h-screen bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full">
                <form action="" method="post" id="formCreatePicture"
                    className="w-full flex">
                    <textarea name="dataURI" id="dataURI" cols="30" rows="10" className="hidden"></textarea>
                    <div className="w-1/4 p-4 pt-0 border-t-2 border-solid border-gray-300 shadow-md 
                    dark:border-dark-third">
                        <p className="w-full flex py-6">
                            <span className="font-bold text-xl dark:text-white">Tin Của Bạn</span>
                        </p>
                        <div className="w-full flex pb-3">
                            <Link to="">
                                <img className="w-20 h-20 object-cover p-1.5 shadow-xl rounded-full "
                                    src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                                    alt="" />
                            </Link>
                            <Link to="" className="py-7 px-3.5 dark:text-white font-bold">Trà Hưởng</Link>
                        </div>
                        <hr />
                        <div className="w-full pt-4 pb-2">
                            <textarea className="outline-none w-full h-48 font-bold resize-none border-2 
                        border-solid border-gray-200 dark:bg-dark-second overflow-hidden my-2 p-2 
                        rounded-lg place-type dark:border-dark-third shadow-xl dark:text-white"
                                placeholder="Bắt đầu nhập"></textarea>
                        </div>
                        <div className="w-full mb-4 px-2 flex relative cursor-pointer border-2 border-solid 
                        border-gray-300 dark:border-dark-third shadow-lg rounded-lg">
                            <i className="bx bx-font-family dark:text-white text-xl py-2"></i>
                            <div className=" p-2.5 relative dark:text-white">
                                GỌN GÀNG
                            </div>
                            <i className="fas fa-caret-down absolute top-4 right-4 dark:text-white"></i>
                        </div>
                    </div>
                    <div className="w-2/4 bg-gray-200 dark:bg-dark-main story-right shadow-3xl">
                        <div className="w-11/12 top-1 mx-auto rounded-2xl mt-6 dark:bg-dark-main bg-white relative 
                        border-2 border-solid border-gray-200 dark:border-dark-third mt-1" style={{ height: 630 }}>
                            <div className="w-97per text-center relative bg-black rounded-2xl" style={{ height: 625 }}>
                                <div id="outer" className="w-1/2 relative left-1/2 mt-1 rounded-lg bg-gray-300 -translate-y-1/2 
                                dark:bg-dark-third justify-center flex top-1/2 items-center top-1/2 transform -translate-x-1/2"
                                    style={{ height: 612 }}>
                                    <img id="myImage" className="w-full rounded-lg pt-1" style={{ maxHeight: 612 }}
                                        src="blob:http://localhost:8000/b6f7af67-08a9-441d-b43e-537419db29e5" alt="" />
                                    <div id="elementMusic"
                                        className="w-1/3 bg-white text-left flex p-1.5 absolute top-32 left-24 rounded-lg"
                                        style={{ transform: "rotate(-25deg)" }}>
                                        <div className="w-1/4 pr-2">
                                            <img src="/img/gai1.jpg" alt="" />
                                        </div>
                                        <div className="w-3/4">
                                            <p className="font-bold" style={{ fontSize: 7 }}>បទកំពុងល្បី 24kgoldn - Mood</p>
                                            <p className="font-sm" style={{ fontSize: 5 }}>24kgoldn</p>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold text-gray-100 break-all content-story-text 
                                    w-80 min-h-8 absolute top-1/2 left-1/2 rounded-2xl text-center font-bold 
                                    outline-none transform -transtate-y-1/2 -translate-x-1/2" >
                                    </div>
                                </div>
                            </div>
                            <canvas id="myCanvas" className="hidden justify-center flex items-center" width="345"
                                height="612"></canvas>
                        </div>
                        <div className="w-full my-6 pl-9">
                            <span className="text-center font-bold w-48per mr-4 py-3 bg-gray-300 rounded-lg cursor-pointer"
                                type="button">Bỏ</span>
                            <button type="button" className="font-bold w-1/2 bg-1877F2 py-3 rounded-lg 
                        text-white">Chia sẻ lên tin</button>
                        </div>
                    </div >
                    <div className="w-1/4 p-4 pt-0 border-t-2 border-solid border-gray-300 shadow-md 
                    dark:border-dark-third">
                        <p className="w-full flex py-6">
                            <span className="font-bold text-xl dark:text-white">Màu chữ</span>
                        </p>
                        <div className="w-full">
                            <div className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white 
                            max-h-40 mb-2 wrapper-content-right overflow-y-auto dark:border-dark-third shadow-xl">
                                <p className="font-bold text-xm py-1 px-2 dark:text-white">Màu chữ</p>
                                <ul className="w-full pl-2 flex flex-wrap h-32 max-h-32 overflow-y-auto" >
                                    <li className="cursor-pointer w-8 h-8 cursor-pointer m-1 rounded-full bg-red-500"></li>
                                </ul>
                            </div>
                        </div>
                        <p className="w-full flex py-6">
                            <span className="font-bold text-xl dark:text-white">Âm nhạc</span>
                        </p>
                        <div className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white 
                        mb-2 dark:border-dark-third  text-center shadow-xl" style={{ maxHeight: 384, height: 384 }}>
                            <p className="font-bold text-xm text-left py-1 px-2 dark:text-white">Âm nhạc</p>
                            <input type="text" name="" id="" className="justify-center w-11/12 dark:bg-dark-third bg-gray-300
                            p-2.5 rounded-lg dark:text-white my-3" placeholder="Nhập tên bài hát" />
                            <ul className="w-full text-left wrapper-content-right text-center overflow-y-auto">
                                <li className="w-full flex p-1 border-2 border-solid border-gray-300 
                                dark:border-dark-third relative cursor-pointer w-72">
                                    <div className="w-2/12 mr-3 pt-1">
                                        <img src="/img/mp3.png" className="w-10 h-10 p-0.5 rounded-full 
                                    object-cover" alt="" />
                                    </div>
                                    <div className="w-8/12 font-bold dark:text-white text-left">
                                        <p className="">Lates Night (Chill)</p>
                                        <p className="text-sm">Rude Boy &amp; White Cherry</p>
                                    </div>
                                    <div className="absolute top-3 right-3 dark:text-white cursor-pointer">
                                        <i className="fas fa-play-circle text-xl"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <input type="file" className="hidden" name="myPictueStory" id="createStoryImage" />
                </form >
            </div >
        </WrapperLogged>
    )
}
