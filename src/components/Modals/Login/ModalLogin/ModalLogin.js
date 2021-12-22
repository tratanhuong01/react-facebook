import React from 'react'
import FormLogin from '../../../Login/FormLogin/FormLogin'
import ModalWrapper from '../../ModalWrapper'

export default function ModalLogin() {
    //

    //
    return (
        <ModalWrapper
            className={`wrapper-scrollbar p-2 w-11/12 fixed top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white z-50 border border-solid 
            border-gray-200 shadow-lv1 rounded-lg sm:w-11/12  lg:w-4/5 xl:w-30%`}
        >
            <h1 className="-pt-1 pb-0.5 text-2xl my-3 text-center">Đăng nhập ensonet</h1>
            <hr></hr>
            <FormLogin remember={true} />
        </ModalWrapper>
    )
}
