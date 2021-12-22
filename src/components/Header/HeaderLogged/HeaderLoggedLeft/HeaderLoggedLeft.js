import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../../assets/images/logo.png";
import { PAGE_HOME } from '../../../../constants/Config';
import InputComponent from '../../../InputComponent/InputComponent';

export default function HeaderLoggedLeft() {
    return (
        <div className="w-1/2 flex ml-1 md:w-1/4 relative">
            <div className="w-11/12 dark:bg-dark-second bg-gray-200 absolute -top-1 -left-3 flex z-30 hidden
            flex-wrap shadow-lg" >
                <div className="w-full h-16 flex">
                    <div className="w-11 h-11 rounded-full text-center items-center pt-1 mt-1 cursor-pointer ml-1 ">
                        <i className="bx bxs-left-arrow-alt text-3xl dark:text-gray-300"></i>
                    </div>
                    <div className="mt-1 pl-1">
                        <div
                            className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-11 h-11 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                            <input type="text" placeholder="Tìm kiếm trên Ensonet"
                                className="w-56 outline-none bg-transparent hidden xl:inline-block dark:text-white" />
                        </div>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="w-full">
                    <div className="w-full py-2">
                        <ul className="w-full flex py-3">
                            <li className="w-1/2 text-left font-bold pl-3 dark:text-white">
                                Tìm kiếm gần đây
                            </li>
                            <li className="w-1/2 text-right font-bold pr-3 text-blue-500">
                                Chỉnh sửa
                            </li>
                        </ul>
                    </div>
                    <div className="w-full py-1">

                        <div className="w-full hover:bg-gray-200 dark:hover:bg-dark-third cursor-pointer">
                            <ul className="w-full relative flex py-2">
                                <li className="w-11 h-11 ml-3">
                                    <div className="border-2 border-solid w-10 h-10 object-cover rounded-full 
                                  text-center border-gray-400 mx-auto relative">
                                        <i
                                            className="bx bx-time-five text-3xl text-gray-400 absolute left-1 bottom-0"></i>
                                    </div>
                                </li>
                                <li className="pl-3 items-center font-bold dark:text-white py-2.5">
                                    huy quần hoa
                                </li>
                                <li className="cursor-pointer w-7 h-7 items-center
                                rounded-full absolute right-3 my-2.5 text-center text-white text-xl pb-1.5">
                                    ×
                                </li>
                            </ul>
                        </div>
                        <div className="w-full hover:bg-gray-200 dark:hover:bg-dark-third cursor-pointer">
                            <ul className="w-full relative flex py-2">
                                <li className="pl-3">
                                    <img className="w-11 h-11 object-cover rounded-full p-0.5"
                                        src="/img/gai.jpg" alt="" />
                                </li>
                                <li className="pl-3 items-center font-bold dark:text-white py-2.5">
                                    Hồ Thiên Kim
                                </li>
                                <li className="cursor-pointer w-7 h-7 items-center 
                                rounded-full absolute right-3 my-2.5 text-center text-white text-xl pb-1.5">
                                    ×
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-0.5">
                <Link to={PAGE_HOME}><img className="w-12 shadow-lv1 rounded-full sm:w-12 border border-gray-200 border-solid"
                    src={logo} alt="" srcSet="" /></Link>
            </div>
            <div className="mt-1 pl-4">
                <div
                    className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-11 h-11 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="bx bx-search text-gray-500 text-xl xl:mr-2 dark:text-dark-txt"></i>
                    <InputComponent type="text" placeholder="Tìm kiếm trên Ensonet"
                        className="outline-none bg-transparent hidden xl:inline-block dark:text-white" />
                </div>
            </div>
        </div>
    )
}
