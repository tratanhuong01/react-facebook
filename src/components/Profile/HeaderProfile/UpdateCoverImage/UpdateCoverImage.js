import React from 'react'
import ButtonComponent from '../../../ButtonComponent/ButtonComponent';

export default function UpdateCoverImage(props) {
    //
    const { setCover, user, cover } = props;
    const handleUpdateCoverImage = async () => {
        console.log(cover);
    }
    //
    return (
        <div className='w-full p-4 flex bg-black bg-opacity-50 fixed top-16 z-50 justify-between items-center'>
            <p className='text-white flex items-center'>
                <i className='bx bx-globe text-2xl mr-2' ></i>Ảnh bìa của bạn hiển thị công khai.
            </p>
            <div className='flex items-center gap-2'>
                <ButtonComponent handleClick={() => setCover(user.cover)} className='rounded-md px-8 py-2 font-semibold 
                     text-white bg-black bg-opacity-20'>
                    Huỷ
                </ButtonComponent>
                <ButtonComponent handleClick={handleUpdateCoverImage} className=' rounded-md px-10 py-2 font-semibold bg-main text-white'>
                    Lưu thay đổi
                </ButtonComponent>
            </div>
        </div>
    )
}
