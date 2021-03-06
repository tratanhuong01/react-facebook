import React, { useContext } from 'react'
import { PostContext } from '../../../contexts/PostContext/PostContext'

export default function ModalWrapperChildPost(props) {
    //
    const { postsDispatch, postsAction } = useContext(PostContext);
    const { title, customerClass } = props;
    //
    return (
        <div className={(customerClass ? customerClass : `shadow-sm border border-solid border-gray-200 bg-white w-11/12 absolute  
        dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-2 sm:w-10/12 md:w-2/3 lg:w-2/3 
        xl:w-36% shadow-lv1 z-50 top-1/2 left-1/2 `) + " dark:border-dark-third"}>
            <p className="p-3.5 -mt-1 block text-center text-xl font-bold dark:text-white">{title}</p>
            <div onClick={() => postsDispatch(postsAction.returnModalPost())} className="w-10 h-10 rounded-full cursor-pointer 
                absolute top-2.5 left-2 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 
                text-gray-600 dark:hover:bg-dark-third dark:bg-dark-main">
                <i className="bx bxs-left-arrow-alt cursor-pointer text-2xl dark:text-white"></i>
            </div>
            <hr className='dark:border-dark-third' />
            {props.children}
        </div>
    )
}
