import React from 'react'
import InputComponent from '../../InputComponent/InputComponent'

export default function MessageList() {
    return (
        <>
            <div className="w-full flex py-2">
                <div className="w-1/2 font-semibold text-2xl py-0.5 ml-5 dark:text-white  flex justify-center xl:justify-start">
                    <span className="flex items-center">Chat</span>
                </div>
                <div className="w-1/2 my-2 ml-auto hidden xl:block">
                    <ul className="ml-auto flex float-right">
                        <li className="w-9 h-9 flex ml-2 bg-gray-200 dark:bg-dark-third rounded-full  
                                dark:text-gray-300 cursor-pointer flex justify-center relative">
                            <span className="fas fa-ellipsis-h flex items-center"></span>
                        </li>
                        <li className="w-9 h-9 flex ml-2 bg-gray-200 dark:bg-dark-third rounded-full  
                                dark:text-gray-300 cursor-pointer flex justify-center">
                            <span className="fas fa-video flex items-center"></span>
                        </li>
                        <li className="w-9 h-9 flex mx-2 bg-gray-200 dark:bg-dark-third rounded-full  
                                dark:text-gray-300 cursor-pointer flex justify-center">
                            <span className="far fa-edit flex items-center"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full text-center px-2 flex">
                <InputComponent type="text" className="w-full mx-auto rounded-full p-2.5 flex items-center
                    bg-gray-100 dark:bg-dark-third dark:text-white" placeholder="Tìm kiếm trên messenger" search={true} />
            </div>
            <div className="w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap 
                justify-center " style={{ maxHeight: "calc(100% - 80px)" }}>
                <div className="w-full mess-person user__chat__child cursor-pointer flex relative py-2 px-1 
                    dark:hover:bg-dark-third hover:bg-gray-200  ">
                    <div className="w-full flex justify-center md:w-1/5 mr-3">
                        <div className="xl:w-14 xl:h-14 object-cover rounded-full mx-auto relative w-16 h-16">
                            <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1639015370/Messenger/ImageGroup/2000000021.jpg"
                                alt="" className="xl:w-14 xl:h-14 rounded-full object-cover mx-auto w-16 h-16" />
                            <span className="w-3.5 h-3.5 rounded-full bg-green-500 absolute bottom-0 right-0.5"></span>
                        </div>
                    </div>
                    <div className="w-4/5 hidden md:block">
                        <div className="w-full text-left">
                            <span className="w-full font-semibold dark:text-gray-300 inline-block whitespace-nowrap 
                                overflow-ellipsis overflow-hidden max-w-full pr-4">Huong Dev</span>
                        </div>
                        <div className="w-full flex py-1 text-sm flex  md:pr-3 xl:pr-0">
                            <div className="w-full flex text-left  dark:text-gray-300 text-gray-500  font-semibold">
                                <div className="max-w-3/4 inline-block whitespace-nowrap text-left overflow-ellipsis 
                                    overflow-hidden pr-1">
                                    Bạn đã đổi tên cuộc trò chuyện thành chaof tatas car
                                </div>
                                <div
                                    className="w-1/4 flex pr-3 inline-block whitespace-nowrap overflow-ellipsis overflow-hidden">
                                    1 tuần
                                </div>
                            </div>
                        </div>
                        <div
                            className="mess-edit top-4 right-8 text-center absolute rounded-full bg-gray-100 dark:bg-dark-second">
                            <i className="fas fa-ellipsis-h edit-mess dark:text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
