import React from 'react'
import CloseModal from '../CloseModal/CloseModal';

export default function ModalWrapper(props) {
    //
    const { className } = props;
    //
    return (
        <div className={className + ' shadow-lv1 '}>
            <CloseModal />
            {props.children}
        </div>
    )
}
