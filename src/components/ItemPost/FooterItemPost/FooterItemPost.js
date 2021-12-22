import React, { useState } from 'react'
import allFeel from "../../../config/feels";
import Feels from '../Feels/Feels';

export default function FooterItemPost() {
    //
    const [feel, setFeel] = useState();
    const [show, setShow] = useState(false);
    //
    return (
        <>
            <div className="w-full flex text-sm text-gray-700 justify-between items-center my-1.5">
                <div className="flex items-center">
                    <div className="flex gap-1.5 mr-2">
                        {feel && <img src={feel.image} alt="" className="w-4 h-4 rounded-full object-cover" />}
                    </div>
                    <span className="font-semibold ">6</span>
                </div>
                <span>2 bình luận</span>
            </div>
            <ul className="w-full flex border-t-2 border-b-2 border-solid border-gray-200 dark:border-dark-third relative text-gray-700">
                <div className="w-1/3 dark:hover:bg-dark-third hover:bg-gray-100 item__hover">
                    <li className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-100 flex w-full 
                    font-semibold h-12 text-sm cursor-pointer justify-center items-center">
                        <div className="flex items-center">
                            {feel ? <>
                                <img src={feel.image}
                                    alt="" className="w-5 mr-1.5 h-5 rounded-full object-cover" />
                                <span className="" style={{ color: feel.color }}>{feel.label}</span>
                            </> :
                                <>
                                    <span className="bx bx-like text-xl text-gray-700" ></span>
                                    <span className="text-gray-700 font-semibold ml-2" >Thích</span>
                                </>}
                        </div>
                    </li>
                    <Feels allFeel={allFeel} setFeel={setFeel} />
                </div>
                <li className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-1/3 font-semibold 
                h-12 text-sm cursor-pointer justify-center items-center flex">
                    <i className="far fa-comment-alt dark:text-gray-300"></i> &nbsp; Bình Luận
                </li>
                <div onClick={() => setShow(!show)} className="w-1/3 z-40 relative cursor-pointer justify-center items-center">
                    <li className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-full font-semibold 
                    text-sm h-12 flex items-center justify-center ">
                        <i className="bx bx-share text-xl transform rotate-180 dark:text-gray-300"></i> &nbsp; Chia sẻ
                    </li>
                    {show && <div className=" bg-white my-2 absolute w-80 p-1 border-2 border-solid rounded-lg dark:bg-dark-second">
                        <ul className="w-full">
                            <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                            hover:bg-gray-300">
                                <i className="bx bx-share text-2xl pr-2 rotate-90"></i>
                                Chia sẽ ngay (Công khai)
                            </li>
                            <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                            hover:bg-gray-300">
                                <i className="bx bx-share text-2xl pr-2 rotate-90"></i>
                                Chia sẽ ngay (Bạn bè)
                            </li>
                            <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                            hover:bg-gray-300">
                                <i className="bx bx-share text-2xl pr-2 rotate-90"></i>
                                Chia sẽ ngay (Chỉ mình tôi)
                            </li>
                            <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                            hover:bg-gray-300">
                                <i className="fas fa-user-edit text-xl pr-2"></i>
                                Chia sẽ lên bản tin
                            </li>
                            <li class="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                            hover:bg-gray-300" >
                                <i className="bx bx-copy  text-xl pr-2"></i>
                                Sao chép liên kết
                            </li>
                            <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                            hover:bg-gray-300">
                                <i className="bx bxl-messenger text-xl pr-2"></i>
                                Gửi qua messenger
                            </li>
                        </ul>
                    </div>}
                </div>
            </ul>
        </>
    )
}
