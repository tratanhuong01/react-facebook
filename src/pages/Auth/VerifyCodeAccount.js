import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent'
import WrapperAuthenination from '../WrapperAuthenination'

export default function VerifyCodeAccount() {
    //
    //
    return (
        <WrapperAuthenination title="Đặt lại mật khẩu của bạn" hideFormLogin={true}>
            <div className="w-full my-2 p-2 pl-5">
                <p>Vui lòng kiểm tra điện thoại để xem tin nhắn văn bản có mã. Mã của bạn có 6 ký tự.</p>
                <div className="w-full flex my-2 items-center">
                    <InputComponent type="text" placeholder="Nhập mã" width={"w-1/2"} className="p-3 rounded-md border-2" />
                    <div className="ml-5">
                        <p>Chúng tôi đã gửi cho bạn mã đến:</p>
                        <p className="text-sm mt-1">+*********22</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="w-full py-3 mt-1 flex justify-between items-center">
                <Link to="" className="text-main text-sm ml-5">
                    Bạn chưa có mã?
                </Link>
                <div className="">
                    <ButtonComponent link={""} className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800">
                        Huỷ
                    </ButtonComponent>
                    <ButtonComponent className="px-4 py-2 mr-5 rounded-lg bg-main text-white">
                        Tiếp tục
                    </ButtonComponent>
                </div>
            </div>
        </WrapperAuthenination >
    )
}
