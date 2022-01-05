import React from 'react'
import { v4 } from 'uuid';
export default function CategoryInputComment(props) {
    //
    const { dataComment, setDataComment } = props;
    const id = v4();
    //
    return (
        <ul className="flex absolute pr-3 transform items-center  -translate-y-1/2 top-1/2 right-0">
            <li className=" w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
            flex items-center justify-center -ml-1.5">
                <i className="far fa-smile dark:text-white text-gray-600"></i>
            </li>
            {dataComment.type !== 1 && <>
                <li className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5">
                    <input name="fileImage" className='hidden' onChange={(event) => {
                        if (event.target.files.length > 0) {
                            setDataComment({ ...dataComment, value: event.target.files[0], type: 1 })
                        }
                    }} type="file" accept="image" encType="multipart/form-data" id={id} />
                    <label htmlFor={id}>
                        <i className="fas fa-camera dark:text-white text-gray-600"></i>
                    </label>
                </li>
                <li className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5">
                    <i className="fas fa-radiation dark:text-white text-gray-600"></i>
                </li>
                <li className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                flex items-center justify-center -ml-1.5">
                    <i className="far fa-sticky-note dark:text-white text-gray-600"></i>
                </li>
            </>}
        </ul>
    )
}
