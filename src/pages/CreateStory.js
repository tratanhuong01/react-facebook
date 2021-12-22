import React from 'react'
import { Link } from 'react-router-dom'
import WrapperLogged from './WrapperLogged'

export default function CreateStory() {
    return (
        <WrapperLogged>
            <div className="w-full flex z-10 bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full"
                style={{ height: "calc(100%)" }}>
                <div className="w-1/4 p-4 pt-16 shadow-lv1 h-full">
                    <p className="w-full flex py-6">
                        <span className="font-bold text-xl dark:text-white">Tin Của Bạn</span>
                    </p>
                    <div className="w-full flex pb-3">
                        <img className="w-20 h-20 p-0.5 shadow-xl rounded-full object-cover"
                            src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                            alt="" />
                        <Link to="" className="py-7 px-3.5 dark:text-white font-semibold">Trà Hưởng</Link>
                    </div>
                    <hr />
                </div>
                <div className="w-3/4 story-right h-full">
                    <div className="w-43per mx-auto relative top-1/3 flex">
                        <form className="w-1/2 m-2 h-80 relative" action="" method="post">
                            <input type="file" className="hidden" name="myPictueStory" id="createStoryImage" />
                            <label className="w-full h-80" htmlFor="createStoryImage">
                                <div className="w-full h-80 rounded-lg shadow-lv1 bg-cover " style={{
                                    backgroundImage: `url('https://res.cloudinary.com/ensonet-dev/image/upload/v1640053117/background-story-left_t5ygma.png')`
                                }}>
                                    <div className="w-full absolute top-1/2 left-1/2 text-center cursor-pointer transform 
                                    -translate-x-1/2 -translate-y-1/2">
                                        <i className="far fa-file-image shadow-md dark:bg-dark-third dark:text-white 
                                        bg-white text-2xl rounded-full px-4 py-2.5 shadow-lv1"></i>
                                        <br />
                                        <p className="text-center text-white font-bold p-2">Tạo tin ảnh</p>
                                    </div>
                                </div>
                            </label>
                        </form>
                        <div className="w-1/2 h-80 relative m-2 rounded-lg shadow-lv1 bg-cover " style={{
                            backgroundImage: `url('https://res.cloudinary.com/ensonet-dev/image/upload/v1640053117/background-story-right_gjszyd.png')`
                        }}>
                            <div className="w-full absolute top-1/2 left-1/2 text-center cursor-pointer transform 
                            -translate-x-1/2 -translate-y-1/2">
                                <i className="fas fa-font shadow-md bg-white dark:bg-dark-third dark:text-white text-2xl 
                            rounded-full px-4 py-2.5"></i>
                                <br />
                                <p className="text-center text-white font-bold p-2">Tạo tin dạng văn bản</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperLogged>
    )
}
