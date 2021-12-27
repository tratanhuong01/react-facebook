import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import { PAGE_HOME, PAGE_LOGIN } from '../constants/Config'
import WrapperAuthenination from './WrapperAuthenination'
import WrapperLogged from './WrapperLogged'

export default function NotFound() {
    //
    const user = useSelector((state) => state.user);
    const navigation = useNavigate();
    const Component = (props) => {
        if (!user)
            return (<WrapperAuthenination notFound={true}>
                {props.children}
            </WrapperAuthenination>)

        else
            return (<WrapperLogged>
                {props.children}
            </WrapperLogged>)
    }
    return (
        <Component>
            <div className={`w-full h-screen flex justify-center items-center`}>
                <div className='w-11/12 md:w-2/3 lg:w-5/12 xl:w-30% text-center mx-auto'>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg" alt=''
                        className='w-32 object-cover mx-auto' />
                    <p className='font-bold text-xl'>Trang này không hiển thị</p>
                    <p className='text-gray-600'>
                        Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên
                        kết mà bạn đang cố mở có chính xác không.
                    </p>
                    <ButtonComponent handleClick={() => {
                        if (user) {
                            navigation(PAGE_HOME)
                        }
                        else {
                            navigation(PAGE_LOGIN)
                        }
                    }} className='px-5 py-2 my-5 rounded-md bg-main text-white font-semibold '>
                        {user ? 'Đi đến bảng tin' : 'Về trang đăng nhập'}
                    </ButtonComponent>
                    <p></p>
                </div>
            </div>
        </Component>
    )
}
