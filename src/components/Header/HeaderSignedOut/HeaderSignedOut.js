import React from 'react'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import InputComponent from '../../InputComponent/InputComponent'

export default function HeaderSignedOut(props) {
    //
    const { hideFormLogin } = props;
    //
    return (
        <div className="w-full flex py-2.5 items-center justify-between border-b-2 border-solid border-gray-200 shadow-sm">
            <span className=" pl-3 text-2xl font-bold text-1877F2">
                Ensonet <br />
            </span>
            {!hideFormLogin &&
                <div className="w-2/3 gap-3 items-center flex justify-end mr-5">
                    <InputComponent type="text" name="emailOrPhone" className="p-2 border border-gray-300 rounded-lg"
                        width={"w-48"} placeholder={`Email hoặc điện thoại`} />
                    <InputComponent type="password" name="password" className="p-2 border border-gray-300 rounded-lg"
                        width={"w-48"} placeholder={`Mật khẩu`} />
                    <ButtonComponent type="submit" className="px-5 py-2 bg-1877F2 text-white rounded-lg">
                        Đăng nhập
                    </ButtonComponent>
                    <ButtonComponent link={""} className="py-2 text-1877F2">
                        Bạn quên tài khoản ư ?
                    </ButtonComponent>
                </div>}
        </div>
    )
}
