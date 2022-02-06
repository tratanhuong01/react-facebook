import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent'
import { PAGE_LOGIN, PAGE_TYPE_NEW_PASSWORD, REGEX_EMAIL } from '../../constants/Config'
import WrapperAuthenination from '../WrapperAuthenination'
import api from '../../api/api'
import { useDispatch } from 'react-redux'
import * as usersAction from "../../actions/user/index";
import useAuthenication from '../../hooks/useAuthenication'

export default function VerifyCodeAccount(props) {
    //
    const dispatch = useDispatch();
    const { verifyAccountNew } = props;
    const [code, setCode] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { token, tokenPrevious } = useAuthenication();
    const navigation = useNavigate();
    //
    return (
        <WrapperAuthenination title={verifyAccountNew ? 'Xác thực tài khoản' : "Đặt lại mật khẩu của bạn"} hideFormLogin={true}>
            <div className="w-full my-2 p-2 pl-5">
                <p>Vui lòng kiểm tra thiết bị cua của bạn để xem tin nhắn văn bản có mã. Mã của bạn có 8 ký tự.</p>
                <div className="w-full flex my-2 items-center">
                    <div className='w-1/2'>
                        <InputComponent handleChange={(value) => {
                            setError(null);
                            setCode(value);
                        }} type="text" value={code} placeholder="Nhập mã" className="w-full p-3 rounded-md border-2" />
                        {error && <p className='text-red-600 font-semibold text-sm my-2'>
                            {error}
                        </p>}
                    </div>
                    <div className="ml-5">
                        <p>Chúng tôi đã gửi cho bạn mã đến:</p>
                        <p className="text-sm mt-1">{token ? token.sub : ''}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="w-full py-3 mt-1 flex justify-between items-center">
                <Link to="" className="text-main text-sm ml-5">
                    Bạn chưa có mã?
                </Link>
                <div className="">
                    <ButtonComponent link={PAGE_LOGIN} className="px-4 font-semibold mr-3 py-2.5 rounded-lg bg-gray-300 text-gray-800">
                        Huỷ
                    </ButtonComponent>
                    <ButtonComponent
                        loading={loading} disabled={loading} handleClick={async () => {
                            let unmounted = false;
                            setLoading(true);
                            if (code === "")
                                setError("Mã xác nhận không được trống !!");

                            else if (code !== token.aud)
                                setError("Mã xác nhận không chính xác !!");
                            else {
                                setError(null);
                                if (token) {
                                    let result = await api(`users/id?id=${token.jti}`, "GET", {}, {});
                                    if (result.data) {
                                        if (verifyAccountNew) {
                                            if (REGEX_EMAIL.test(token.sub)) {
                                                result.data.codeEmail = token.aud;
                                            }
                                            else {
                                                result.data.codePhone = token.aud;
                                            }
                                            await api(`users`, 'PUT', result.data, {});
                                            result = await api(`users/generate/login/id/jwt?id=${token.jti}`, 'POST', null, {});
                                            if (result.data) {
                                                localStorage.setItem('user', result.data.token);
                                                dispatch(usersAction.loginUserRequest(result.data.token));
                                            }
                                        }
                                        else {
                                            navigation(PAGE_TYPE_NEW_PASSWORD + `?token=${tokenPrevious}`);
                                        }
                                    }
                                }
                            }
                            if (!unmounted) setLoading(false);
                            return () => {
                                unmounted = true;
                            }
                        }} className="px-4 py-2 mr-5 rounded-lg bg-main text-white">
                        Tiếp tục
                    </ButtonComponent>
                </div>
            </div>
        </WrapperAuthenination >
    )
}
