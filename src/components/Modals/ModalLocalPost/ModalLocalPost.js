import React, { useContext } from 'react'
import locals from '../../../config/locals'
import { PostContext } from '../../../contexts/PostContext/PostContext'
import InputComponent from '../../InputComponent/InputComponent'
import ModalWrapperChildPost from '../ModalWrapperChildPost/ModalWrapperChildPost'

export default function ModalLocalPost() {
    //
    const { postsDispatch, postsAction } = useContext(PostContext);
    //
    return (
        <ModalWrapperChildPost title="Tìm kiếm vị trí">
            <div className="w-full my-2 px-2">
                <InputComponent className="dark:text-white w-full p-2.5 border border-gray-300 
                pl-4 bg-transparent dark:bg-dark-third rounded-3xl" type="text" placeholder="Tìm kiếm" search={true} />
            </div>
            <div className="tac-user wrapper-content-right">
                {locals.map(local =>
                    <div onClick={() => {
                        postsDispatch(postsAction.updateData('local', JSON.stringify(local)));
                        postsDispatch(postsAction.returnModalPost());
                    }} key={local.id} className="w-full pl-4  dark:hover:bg-dark-third rounded-lg cursor-pointer relative flex py-1.5
                    hover:bg-gray-200">
                        <div className=" w-12 h-12 flex justify-center items-center mr-3 bg-gray-300 rounded-full 
                        dark:bg-dark-main">
                            <i className="fas fa-map-marker-alt text-red-500 text-2xl "></i>
                        </div>
                        <p className="dark:text-white flex items-center">{local.name}</p>
                        <span className="absolute top-4 right-6">
                        </span>
                    </div>)}
            </div>
        </ModalWrapperChildPost>
    )
}
