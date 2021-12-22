import React, { useState } from 'react'
import InputComponent from '../../InputComponent/InputComponent'
import ModalWrapperChildPost from '../ModalWrapperChildPost/ModalWrapperChildPost'

export default function ModalFeelPost() {
    //
    const [type, setType] = useState(0);
    //
    return (
        <ModalWrapperChildPost title="Bạn cảm thấy như thế nào?">
            <ul className='mt-2 mb-4 flex gap-3 text-gray-600'>
                <li onClick={() => setType(0)} className={`${type === 0 ? 'border-b-4 border-main text-main' : 'border-white dark:border-dark-third'} 
                 p-3 border-solid font-semibold cursor-pointer`}>Cảm xúc</li>
                <li onClick={() => setType(1)} className={`${type === 1 ? 'border-b-4 border-main text-main' : 'border-white dark:border-dark-third'} 
                 p-3 border-solid font-semibold cursor-pointer`}>Hoạt động</li>
            </ul>
            <div class="w-full my-2 px-2">
                <InputComponent className="dark:text-white w-full p-2.5 border border-gray-300 
                pl-4 bg-transparent dark:bg-dark-third rounded-3xl" type="text" placeholder="Tìm kiếm" search={true} />
            </div>
            <div className="tac-user wrapper-content-right" id="feelUserCurrent">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item =>
                    <div className="tac-user-clone pl-4 flex items-center dark:hover:bg-dark-third rounded-lg cursor-pointer 
                    relative hover:bg-gray-200" key={item}>
                        <div className="w-10 h-10 mr-4 flex justify-center items-center bg-gray-100 rounded-full dark:bg-dark-third">
                            <span className="text-2xl">🙂</span>
                        </div>
                        <p className="dark:text-white">hạnh phúc</p>
                        <span className="absolute top-4 right-6">
                        </span>
                    </div>)}
            </div>
        </ModalWrapperChildPost>
    )
}
