import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { PAGE_FORGET_ACCOUNT, PAGE_VERIFY_CODE_ACCOUNT_RECOVER } from '../../constants/Config'
import WrapperAuthenination from '../WrapperAuthenination'

export default function RecoverAccount() {
    //
    const navigation = useNavigate();
    //
    return (
        <WrapperAuthenination hideFormLogin={true} title="Đặt lại mật khẩu của bạn">
            <form method='post' onSubmit={(e) => {
                e.preventDefault();
                navigation(PAGE_VERIFY_CODE_ACCOUNT_RECOVER);
            }}>
                <div className="w-full my-2 p-2 flex">
                    <div className="w-2/3 pl-4">
                        <p className="mb-2">Bạn muốn nhận mã để đặt lại mật khẩu bằng cách nào?</p>
                        <div className="flex mb-3 p-2 hover:bg-gray-100 items-center">
                            <input type="radio" className="transform scale-130 mr-3" />
                            <div>
                                <p>Gửi mã qua email</p>
                                <p className="text-xs text-gray-600 font-semibold mt-1">t**************1@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex p-2 hover:bg-gray-100 items-center">
                            <input type="radio" className="transform scale-130 mr-3" />
                            <div>
                                <p>Gửi mã qua SMS</p>
                                <p className="text-xs text-gray-600 font-semibold mt-1">+*********22</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="py-8">
                            <img src="https://cdyduochopluc.edu.vn/wp-content/uploads/2019/07/anh-dai-dien-FB-200-1.jpg"
                                alt="" className="w-16 h-16 mx-auto rounded-full object-cover mb-2" />
                            <p className="w-full text-center mt-1">Tấn Hưởng</p>
                            <p className="w-full text-center text-xs mt-0.5 text-gray-600">Người dùng facebook</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="w-full py-3 mt-1 flex justify-between items-center">
                    <Link to="" className="text-main text-sm ml-5">
                        Không còn truy cập được nữa?
                    </Link>
                    <div className="">
                        <ButtonComponent link={PAGE_FORGET_ACCOUNT} className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800">
                            Không phải bạn ?
                        </ButtonComponent>
                        <ButtonComponent className="px-4 py-2 mr-5 rounded-lg bg-main text-white">
                            Tiếp tục
                        </ButtonComponent>
                    </div>
                </div>
            </form>
        </WrapperAuthenination >
    )
}
