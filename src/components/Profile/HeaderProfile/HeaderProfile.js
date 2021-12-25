import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import InfoProfile from './InfoProfile/InfoProfile';

export default function HeaderProfile() {
    //
    const user = useSelector((state) => state.user);
    const [cover, setCover] = useState(user.cover);
    const { modalsDispatch, modalsAction } = useContext(ModalContext);
    //
    return (
        <>
            {cover && cover.name && <div className='w-full p-4 flex bg-black bg-opacity-50 fixed top-16 z-50 justify-between items-center'>
                <p className='text-white flex items-center'>
                    <i className='bx bx-globe text-2xl mr-2' ></i>Ảnh bìa của bạn hiển thị công khai.
                </p>
                <div className='flex items-center gap-2'>
                    <ButtonComponent handleClick={() => setCover(user.cover)} className=' rounded-md px-8 py-2 font-semibold  text-white bg-black bg-opacity-20'>
                        Huỷ
                    </ButtonComponent>
                    <ButtonComponent className=' rounded-md px-10 py-2 font-semibold bg-main text-white'>
                        Lưu thay đổi
                    </ButtonComponent>
                </div>
            </div>}
            <div className="dark:bg-dark-second pt-10 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                <div className="w-full border-b-2 border-solid border-gray-300 relative">
                    <div className=" relative h-60 lg:h-96 mx-auto" style={{ width: "110%", left: "-4.3%" }}>
                        <img className="w-full h-60 object-cover lg:h-96 rounded-lg"
                            src={cover ? cover.name ? URL.createObjectURL(cover) : cover : cover}
                            alt="" />
                        <div className="w-full h-60 lg:h-96 absolute top-0 left-0 z-20 bg-opacity-50 bg-white hidden">
                            <div className="w-full h-full relative flex justify-center items-center">
                                <i className="fas fa-spinner fa-pulse text-5xl"></i>
                            </div>
                        </div>
                        <div className="z-40 p-1.5 bg-gray-50 absolute text-center rounded-lg bottom-3 right-3">
                            <input type={'file'} className='hidden' id='changeCover' onChange={(event) => {
                                if (event.target.files.length > 0) {
                                    setCover(event.target.files[0]);
                                }
                            }} />
                            <label htmlFor="changeCover" className="flex items-center">
                                <i className="fas fa-camera text-2xl pl-1"></i>
                                <span className="hidden lg:inline pt-1 ml-2 text-sm font-semibold">Chỉnh sửa ảnh bìa</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full relative z-10 flex pb-2 border-b-6 border-solid border-gray-200">
                        <div className="-mt-9 relative" style={{ width: 180, height: 180 }}>
                            <img className="w-full h-full rounded-full border-4 border-solid border-white object-cover"
                                src={user.avatar}
                                alt="" />
                            <div className="text-2xl absolute bottom-2 right-2 z-40 bg-gray-200 w-11 h-11 flex justify-center 
                            items-center rounded-full shadow-lv1 border-2 border-solid border-gray-300">
                                <input name="fileAvatar" id="changeAvatar" onChange={(event) => {
                                    if (event.target.files.length > 0) {
                                        modalsDispatch(modalsAction.openModalPreviewAvatar(event.target.files[0]))
                                    }
                                }} type="file" accept="image" className='hidden' />
                                <label htmlFor="changeAvatar"><i className="fas fa-camera"></i></label>
                            </div>
                        </div>
                        <InfoProfile user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
