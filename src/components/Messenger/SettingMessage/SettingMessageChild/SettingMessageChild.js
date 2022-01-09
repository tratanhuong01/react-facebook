import React from 'react'

export default function SettingMessageChild(props) {
    //
    const { hide } = props;
    //
    return (
        <li className="w-full py-1 ">
            <ul className="w-full">
                {hide && <li className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex">
                    <div className="flex justity-center w-8">
                        <span className="bx bxl-messenger text-xm dark:text-white flex items-center"></span>
                    </div>
                    <div className="flex items-center">Mở trong messenger</div>
                </li>}
                <li className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex">
                    <div className="flex justity-center w-8">
                        <span className="fab fa-ussunnah text-xm dark:text-white flex items-center"></span>
                    </div>
                    <div className="flex items-center">Đổi chủ đề</div>
                </li>
                <li className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex">
                    <div className="flex justity-center w-8">
                        <span className=" text-xm dark:text-white flex items-center">❤️</span>
                    </div>
                    <div className="flex items-center">Thay đổi biểu tượng cảm xúc</div>
                </li>
                <li className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex">
                    <div className="flex justity-center w-8">
                        <span className="fas fa-pen text-xm dark:text-white flex items-center"></span>
                    </div>
                    <div className="flex items-center">Chỉnh sửa biệt danh</div>
                </li>
                {!hide && <li className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex">
                    <div className="flex justity-center w-8">
                        <span className="fas fa-search text-xm dark:text-white flex items-center"></span>
                    </div>
                    <div className="flex items-center">Tìm kiếm trong cuộc trò chuyện</div>
                </li>}
                {hide && <li className="w-full py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-third 
                py-2 px-2 font-semibold cursor-pointer dark:text-white flex">
                    <div className="flex justity-center w-8">
                        <span className="bx bxs-trash-alt text-xm dark:text-white flex items-center"></span>
                    </div>
                    <div className="flex items-center">Xoá cuộc trò chuyện</div>
                </li>}
            </ul>
        </li>
    )
}
