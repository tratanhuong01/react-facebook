import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent'
import WrapperAuthenination from '../WrapperAuthenination'

export default function ForgetAccount() {
    //
    //  
    return (
        <WrapperAuthenination title="Tìm tài khoản của bạn">
            <div className="w-full px-5 mb-3">
                <p className="py-3">Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.</p>
                <InputComponent type="text" name="code" placeholder="Email hoặc số di động"
                    className="border border-gray-300 rounded-lg p-2.5" />
            </div>
            <hr></hr>
            <div className="w-full py-3 mt-1 flex justify-end items-center">
                <ButtonComponent className="px-4 mr-5 py-2 rounded-lg bg-gray-500 text-white">
                    Huỷ
                </ButtonComponent>
                <ButtonComponent className="px-4 mr-5 py-2  rounded-lg bg-1877F2 text-white">
                    Tìm kiếm
                </ButtonComponent>
            </div>
        </WrapperAuthenination>
    )
}
