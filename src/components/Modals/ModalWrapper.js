import React from 'react'
import CloseModal from '../CloseModal/CloseModal';

export default function ModalWrapper(props) {
    //
    const { className, title } = props;
    //
    return (
        <div className={className + ' shadow-lv1 '}>
            <div className='w-full relative'>
                <p className="text-2xl font-bold p-2.5 -mt-1.5 text-center dark:text-white">
                    {title}
                </p>
                <CloseModal />
                {props.children}
            </div>
        </div>
    )
}
