import React from 'react'

export default function TypeCommentInput() {
    return (
        <div className="w-full mx-0 my-2 flex relative">
            <div className="w-1/12">
                <img className="w-12 h-12 p-0.5 object-cover rounded-full border-2 border-solid"
                    src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                    alt="" srcSet="" />
            </div>
            <div className="w-11/12 ml-2 relative bg-gray-100 dark:bg-dark-third px-3 overflow-hidden rounded-full">
                <div className="border-none outline-none bg-gray-100 dark:bg-dark-third dark:text-white py-3"
                    style={{ minHeight: 30, width: "96%" }} contentEditable={true}
                    placeholder="Viết bình luận..."></div>
                <ul className="flex absolute bottom-1 right-0">
                    <li className=" py-2 pr-3 cursor-pointer">
                        <i className="far fa-smile dark:text-white text-gray-600"></i>
                    </li>
                    <li className="py-2 pr-3 cursor-pointer">
                        <input name="fileImage" className='hidden' type="file" accept="image" encType="multipart/form-data" />
                        <label htmlFor="2000000102fileImagess">
                            <i className="fas fa-camera dark:text-white text-gray-600"></i>
                        </label>
                    </li>
                    <li className="py-2 pr-3 cursor-pointer">
                        <i className="fas fa-radiation dark:text-white text-gray-600"></i>
                    </li>
                    <li className="py-2 pr-3 cursor-pointer">
                        <i className="far fa-sticky-note dark:text-white text-gray-600"></i>
                    </li>
                </ul>
            </div>
            <div className="z-50 hidden absolute right-0 bg-white my-2 absolute w-72 dark:border-dark-second 
            shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second"
                style={{ maxHeight: 360, height: 360 }}>
            </div>
        </div >
    )
}
