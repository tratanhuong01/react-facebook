import React, { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext/PostContext';

export default function ImageVideoEditComponent(props) {
    //
    const { posts, postsDispatch, postsAction } = useContext(PostContext);
    const { component, src, style, file } = props;
    //
    return (
        <div className=''>
            <div className=" relative mb-3">
                <span onClick={() => postsDispatch(postsAction.updateData('imageVideo',
                    [...([...posts.imageVideo].filter(dt => dt.lastModified !== file.lastModified))]
                ))} className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer absolute top-1 right-1  
                text-gray-700 hover:text-gray-800 font-bold bx bx-x text-xl flex justify-center items-center z-20'>
                </span>
                <div className="mx-auto relative" style={style}>
                    {component}
                </div>
                <div className="w-full h-full absolute top-0 left-0 bg-black" style={{ zIndex: -1 }} >
                    <img src={src} alt="" className="w-full h-full object-cover opacity-30"
                        style={{ filter: "blur(6px)" }} />
                </div>
            </div>
            <div className='w-full flex justify-center my-3'>
                <textarea className='w-full mx-auto h-20 p-3 border border-solid border-gray-200 shadow-lv1 dark:bg-dark-main 
                     rounded-lg resize-none focus:border-blue-500 dark:border-dark-second' spellCheck={false} placeholder='Chú thích'></textarea>
            </div>
        </div>
    )
}
