import React from 'react'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'

export default function HeaderProfile() {
    return (
        <>
            <div className=" relative h-60 lg:h-96 mx-auto" style={{ width: "110%", left: "-4.3%" }}>
                <img className="w-full h-60 object-cover lg:h-96 rounded-lg"
                    src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289164/CoverImage/ws78fdicxqcvxelti1xv.jpg"
                    alt="" />
                <div className="w-full h-60 lg:h-96 absolute top-0 left-0 z-20 bg-opacity-50 bg-white hidden">
                    <div className="w-full h-full relative">
                        <i className="fas fa-spinner fa-pulse absolute top-1/3 left-48% text-5xl transform 
                        -translate-y-1/2 -translate-x-1/2 mr-7"></i>
                    </div>
                </div>
                <div className="z-40 p-1.5 bg-gray-50 absolute text-center rounded-lg bottom-3 right-3">
                    <label htmlFor="changeB" className="flex items-center">
                        <i className="fas fa-camera text-2xl pl-1">
                        </i>
                        <span className="hidden lg:inline pt-1 ml-2 text-sm font-semibold">Chỉnh sửa ảnh bìa</span>
                    </label>
                </div>
            </div>
            <div className="w-full relative z-10 flex pb-2 border-b-6 border-solid border-gray-200">
                <div className="-mt-9 relative" style={{ width: 180, height: 180 }}>
                    <img className="w-full h-full rounded-full border-4 border-solid border-white object-cover"
                        src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" />
                    <div className="text-2xl absolute bottom-2 right-2 z-40 bg-gray-200 w-11 h-11 flex justify-center 
                    items-center rounded-full shadow-lv1 border-2 border-solid border-gray-300">
                        <input name="fileAvatar" id="changeavt" type="file" accept="image" className='hidden' />
                        <label htmlFor="changeavt"><i className="fas fa-camera"></i></label>
                    </div>
                </div>
                <div className="p-2 relative" style={{ width: "calc(100% - 180px)" }}>
                    <p className="font-semibold flex text-4xl py-1 dark:text-white flex items-center">
                        Trà Hưởng
                        <span className="ml-3 bg-blue-500 rounded-full 
                        text-sm font-bold text-white w-4 h-4 flex">
                            <i className="bx bx-check flex justiy-center items-center "></i>
                        </span>
                    </p>
                    <p className="text-gray-600 items-center pl-1 pb-1 flex">
                        <span>1.870 bạn bè</span>
                        <span className='mx-1'>•</span>
                        <span></span>
                    </p>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex pl-2 my-1">
                            <img className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third 
                            relative z-30 -ml-2 rounded-full object-cover"
                                src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                                alt="" />
                            <img className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third 
                            relative z-20 -ml-2 rounded-full object-cover"
                                src="http://res.cloudinary.com/tratahuong01/image/upload/v1634874843/Avatar/wwyvpklsoeqxbw0jzawr.jpg"
                                alt="" />
                            <img className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third 
                            relative z-10 -ml-2 rounded-full object-cover"
                                src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289083/PostNormal/xxxi1jytvxdmvnmwckcf.jpg"
                                alt="" />
                        </div>
                        <div className="flex justify-end items-center">
                            {/* <ButtonComponent className="flex items-center h-10 px-2 bg-main rounded-lg mr-2 text-white font-semibold text-sm">
                                <i class="bx bx-user-check text-xl dark:text-white mr-1" ></i>
                                Phản hồi
                            </ButtonComponent>
                            <ButtonComponent className="flex items-center h-10 px-2 bg-main rounded-lg mr-2 text-white font-semibold text-sm">
                                <i class="bx bxl-messenger text-xl dark:text-white mr-1" ></i>
                                Nhắn tin
                            </ButtonComponent> */}
                            {/* <ButtonComponent className="flex items-center h-10 px-2 bg-gray-200 rounded-lg mr-2 font-semibold text-sm">
                                <i class="bx bx-user-x text-xl dark:text-white mr-1" ></i>
                                Huỷ lời mời
                            </ButtonComponent> */}
                            <ButtonComponent className="flex items-center h-10 px-2 bg-main rounded-lg mr-2 text-white font-semibold text-sm">
                                <div className="w-5 h-5 mr-1.5 rounded-full bg-white flex justify-center items-center 
                                text-main"><i className="bx bx-plus"></i></div>Thêm vào tin
                            </ButtonComponent>
                            {<ButtonComponent className=" rounded-lg h-10 px-2 font-semibold bg-gray-200 hover:bg-gray-300 text-sm flex items-center">
                                <i className="bx bxs-pencil text-xl mr-2"></i> Chỉnh sửa trang cá nhân
                            </ButtonComponent>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
