import React from 'react'
import ButtonComponent from '../../../ButtonComponent/ButtonComponent'

export default function Introduction() {
    return (
        <>
            <p className="font-bold text-xl py-2 dark:text-white">Giới thiệu
            </p>
            <p className='mb-3 text-center'>
                🧑‍💻
            </p>
            {/* <hr /> */}
            <ButtonComponent className='w-full p-2 text-sm bg-gray-200 hover:bg-gray-300 font-semibold rounded-lg'>
                Chỉnh sửa tiểu sử
            </ButtonComponent>
            <ul className="w-full mt-3">
                <li className="w-full pb-3">
                    <p className="dark:text-gray-300">
                        <i className="fas fa-briefcase text-gray-600 text-xl dark:text-gray-300 mr-1"></i>
                        Làm việc tại
                        <span className="ml-1 dark:text-gray-300">Facebook</span>
                    </p>
                </li>
                <li className="w-full pb-3">
                    <p className="dark:text-gray-300">
                        <i className="fas fa-graduation-cap text-gray-600 dark:text-gray-300 text-xl mr-1"></i>
                        Học tại
                        <span className="dark:text-gray-300 ml-1">
                            Đại Học Công Nghệ Thông Tin Truyền Thông Việt - Hàn
                        </span>
                    </p>
                </li>
                <li className="w-full pb-3">
                    <p className="dark:text-gray-300">
                        <i className="fas fa-home text-gray-600 dark:text-gray-300 text-xl mr-1"></i>
                        Sống tại
                        <span className="dark:text-gray-300 ml-1">Quảng Nam</span>
                    </p>
                </li>
                <li className="w-full pb-3">
                    <p className="dark:text-gray-300">
                        <i className="fas fa-map-marker-alt text-gray-600 dark:text-gray-300 text-xl mr-1"></i>
                        Đến từ
                        <span className="dark:text-gray-300 ml-1">Quảng Nam</span></p>
                </li>
                <li className="w-full pb-3">
                    <p className="dark:text-gray-300">
                        <i className="fas fa-heart text-gray-600 dark:text-gray-300 mr-1 text-xl"></i>
                        Tìm Hiểu
                    </p>
                </li>
                <li className="w-full pb-3">
                    <p className="dark:text-gray-300">
                        <i className="fas fa-clock text-gray-600 text-xl dark:text-gray-300 mr-1"></i>
                        Đã tham gia tháng 02 năm 2021
                    </p>
                </li>

            </ul>
            <ButtonComponent className='w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold rounded-lg'>
                Chỉnh sửa chi tiết
            </ButtonComponent>
            <ButtonComponent className='w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold rounded-lg'>
                Thêm sở thích
            </ButtonComponent>
            <ButtonComponent className='w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold rounded-lg'>
                Thêm nội dung đáng chú ý
            </ButtonComponent>
        </>
    )
}
