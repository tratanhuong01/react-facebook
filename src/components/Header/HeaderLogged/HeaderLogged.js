import React from 'react'
import HeaderLoggedCenter from './HeaderLoggedCenter/HeaderLoggedCenter'
import HeaderLoggedLeft from './HeaderLoggedLeft/HeaderLoggedLeft'
import HeaderLoggedRight from './HeaderLoggedRight/HeaderLoggedRight'

export default function HeaderLogged() {
    return (
        <div className="w-full block z-50 fixed bg-white top-0 dark:bg-dark-second border-b-2 border-solid border-gray-200 
        dark:border-dark-third shadow-lv1" id="header" >
            <div className="w-full flex px-2 my-1 items-center">
                <HeaderLoggedLeft />
                <div className="w-1/2 hidden md:block md:w-1/2 lg:w-1/2">
                    <div className="mx-auto wrapper w-4/5">
                        <HeaderLoggedCenter />
                    </div>
                </div>
                <HeaderLoggedRight />
            </div>
        </div >
    )
}
