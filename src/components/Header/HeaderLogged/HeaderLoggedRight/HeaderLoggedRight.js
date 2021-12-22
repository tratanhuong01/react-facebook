import React, { useState } from 'react'

export default function HeaderLoggedRight() {
    //
    const [active, setActive] = useState();
    //
    return (
        <div className="w-1/2 flex sm:w-3/4 md:w-1/4">
            <div className="w-1/2 flex py-0.875 px-2.5 mx-2 mt-1 mb-1.5 p-1.5 hover:bg-gray-200 round-avatar dark:hover:bg-dark-third 
            lg:mx-0">
                <div className="w-1/3 hidden lg:block lg:w-full lg:pt-1 xl:w-auto xl:mr-2">
                    <img className="w-8 h-8 rounded-full object-cover"
                        src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" />
                </div>
                <div className="w-2/3 hidden dark:text-white pt-1 text-center xl:block xl:w-auto lg:pt-2">
                    Hưởng
                </div>
            </div>
            <div className="w-full pt-2 pb-2 sm:w-full">
                <ul className="flex float-right">
                    <li onClick={() => setActive(!active)} className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
                    dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center">
                        <i className="bx bx-plus text-xl hidden"></i>
                        <i className="bx bxs-moon text-2xl"></i>
                    </li>
                    <li onClick={() => setActive(!active)} className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
                    dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center">
                        <i className="bx bxl-messenger text-2xl"></i>
                        <span className="absolute -top-2 -right-1 text-xs transform scale-90 text-white font-semibold bg-red-500 w-5 h-5
                        rounded-full flex justify-center items-center">
                            +9
                        </span>
                    </li>
                    <li onClick={() => setActive(!active)} className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
                    dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center">
                        <i className="far fa-bell text-xl"></i>
                        <span className="absolute -top-2 -right-1 text-xs transform scale-90 text-white font-semibold bg-red-500 w-5 h-5
                        rounded-full flex justify-center items-center">
                            +9
                        </span>
                    </li>
                    <li className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
                    dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center">
                        <i className="fas fa-sort-down text-2xl transform -translate-y-1 "></i>
                    </li>
                </ul >
            </div >
            <div className="w-full hidden p-2 rounded-lg absolute dark:bg-dark-second bg-white 
            z-50 top-16 wrapper-scrollbar overflow-x-hidden overflow-y-auto border-solid border-gray-200 
            lg:w-92 lg:p-0 tranform -translate-1/2 sm:w-3/4 right-0 border-2 lg:w-92 shadow-xl 
            dark:border-dark-main" style={{ maxheight: "675px !important" }}>

            </div>
        </div >
    )
}
