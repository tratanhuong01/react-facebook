import React from 'react'
import InputComponent from '../../InputComponent/InputComponent'
import ModalWrapperChildPost from '../ModalWrapperChildPost/ModalWrapperChildPost';

export default function ModalTagPost() {
    //
    //
    return (
        <ModalWrapperChildPost title="Gắn thẻ bạn bè">
            <div className="w-full my-2 px-2 flex items-center">
                <InputComponent className="dark:text-white font-bold w-10/12 p-2.5 pl-4 bg-transparent dark:bg-dark-third rounded-3xl 
                border border-solid border-gray-300" search={true} type="text" placeholder="Tìm kiếm bạn bè" />&nbsp;&nbsp;&nbsp;
                <span className="font-bold ml-4 text-blue-500 cursor-pointer">Xong</span>
            </div>
            <div className="w-full pb-3 px-2">
                <p className="w-full mx-auto dark:text-gray-300 font-bold py-1">Đã gắn thẻ</p>
                <div className="w-full mx-auto p-2 border-2 border-solid border-gray-300 rounded-lg">
                    <div className="w-auto gap-2 flex flex-wrap max-h-32 overflow-y-auto">
                        <div
                            className="my-1 break-all text-sm w-auto rounded-full cursor-pointer p-1.5 bg-blue-100 text-blue-500 font-bold">
                            Anh Hoang<span className="ml-3 text-xm">&times;</span>
                        </div>
                        <div
                            className="my-1 break-all text-sm w-auto rounded-full cursor-pointer p-1.5 bg-blue-100 text-blue-500 font-bold">
                            Anh Hoang<span className="ml-3 text-xm">&times;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tac-user wrapper-content-right" >
                <p className="w-11/12 mx-auto dark:text-gray-300 font-bold py-2">Gợi ý</p>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
                    <div className="w-full relative flex py-1.5 px-4 cursor-pointer hover:bg-gray-200 
                    rounded-lg dark:hover:bg-dark-third" key={item}>
                        <div className="text-center pr-2.5" >
                            <img className="w-12 h-12 rounded-full object-cover"
                                src="http://res.cloudinary.com/tratahuong01/image/upload/v1619959559/Avatar/d2ec0nuvl9fdpufknf12.jpg"
                                alt="" />
                        </div>
                        <div className="tac-user-2" style={{ paddingTop: "1%", paddingLeft: "2%" }}>
                            <p className="font-bold dark:text-white">Toi Dev</p>
                        </div>
                        <span className="absolute top-1/2 transform -translate-y-1/2 right-8">
                            <i className="fas fa-check text-green-400 text-xl"></i>
                        </span>
                    </div>)}
            </div>
        </ModalWrapperChildPost>
    )
}
