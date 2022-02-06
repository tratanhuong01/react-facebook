import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { PAGE_LOGIN, PAGE_VERIFY_CODE_ACCOUNT_RECOVER, PAGE_VERIFY_CODE_ACCOUNT_REGISTER } from '../../constants/Config'
import useAuthenication from '../../hooks/useAuthenication'
import WrapperAuthenination from '../WrapperAuthenination'

export default function RecoverAccount(props) {
    //
    const { verify } = props;
    const navigation = useNavigate();
    const { token, user } = useAuthenication(true);
    const [loading, setLoading] = useState();
    const [emailOrPhone, setEmailOrPhone] = useState();
    //
    return (
        <WrapperAuthenination hideFormLogin={true} title={verify ? "Xác nhận tài khoản của bạn" :
            "Đặt lại mật khẩu của bạn"}>
            {user && token ? <>
                <div className="w-full my-2 p-2 flex">
                    <div className="w-2/3 pl-4">
                        <p className="mb-2">Bạn muốn nhận mã để {verify ? "xác nhận tài khoản"
                            : "đặt lại mật khẩu"} bằng cách nào?</p>
                        {user.email && <div className="flex mb-3 p-2 hover:bg-gray-100 items-center">
                            <input type="radio" name='emailOrPhone' onChange={(event) => setEmailOrPhone(event.target.value)}
                                className="transform scale-130 mr-3" value={"email"} />
                            <div>
                                <p>Gửi mã qua email</p>
                                <p className="text-xs text-gray-600 font-semibold mt-1">{user.email}</p>
                            </div>
                        </div>}
                        {user.phone && <div className="flex p-2 hover:bg-gray-100 items-center">
                            <input type="radio" name='emailOrPhone' onChange={(event) => setEmailOrPhone(event.target.value)}
                                className="transform scale-130 mr-3" value={"phone"} />
                            <div>
                                <p>Gửi mã qua SMS</p>
                                <p className="text-xs text-gray-600 font-semibold mt-1">
                                    +84{user.phone.substring(1)}</p>
                            </div>
                        </div>}
                    </div>
                    <div className="w-1/3">
                        <div className="py-8">
                            <img src={user.avatar}
                                alt="" className="w-16 h-16 mx-auto rounded-full object-cover mb-2" />
                            <p className="w-full text-center mt-1">{`${user.firstName} ${user.lastName}`}</p>
                            <p className="w-full text-center text-xs mt-0.5 text-gray-600">Người dùng facebook</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="w-full py-3 mt-1 flex justify-end items-center">
                    <div className="">
                        <ButtonComponent link={PAGE_LOGIN} className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800">
                            Huy
                        </ButtonComponent>
                        <ButtonComponent handleClick={async () => {
                            setLoading(true);
                            let result = await api(`send/code/${emailOrPhone}?${emailOrPhone}=${user[emailOrPhone]}`, 'POST', null, {});
                            result = await api(`users/generate/jwt`, 'POST', {
                                emailOrPhone: user[emailOrPhone],
                                time: 3600,
                                type: !user.codeEmail && !user.codePhone ? 0 : 1,
                                code: result.data,
                                id: user.id
                            }, {});
                            if (!user.codeEmail && !user.codePhone) {
                                navigation(PAGE_VERIFY_CODE_ACCOUNT_REGISTER + `?token=${result.data}`);
                            }
                            else {
                                navigation(PAGE_VERIFY_CODE_ACCOUNT_RECOVER + `?token=${result.data}`)
                            }
                        }} disabled={!emailOrPhone} loading={loading} className="px-4 py-2 mr-5 rounded-lg bg-main text-white">
                            Tiếp tục
                        </ButtonComponent>
                    </div>
                </div>
            </> : <div className='w-full h-80 flex items-center justify-center'>
                <i className="fas fa-circle-notch text-xs text-gray-500 mx-9 fa-spin"></i>
            </div>}
        </WrapperAuthenination >
    )
}
