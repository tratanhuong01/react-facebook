import React, { useState } from 'react'
import allFeel from "../../../config/feels";
import Feels from '../Feels/Feels';
import ButtonShare from './ButtonShare/ButtonShare';


export default function FooterItemPost() {
    //
    const [feel, setFeel] = useState();
    //
    return (
        <>
            <div className="w-full flex text-sm text-gray-700 dark:text-gray-300 justify-between items-center my-1.5">
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
                                    <span className="bx bx-like text-xl" ></span>
                                    <span className=" font-semibold ml-2" >Thích</span>
                                </>}
                        </div>
                    </li>
                    <Feels allFeel={allFeel} setFeel={setFeel} />
                </div>
                <li className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-1/3 font-semibold 
                h-12 text-sm cursor-pointer justify-center items-center flex">
                    <i className="far fa-comment-alt dark:text-gray-300"></i> &nbsp; Bình Luận
                </li>
                <ButtonShare />
            </ul>
        </>
    )
}
