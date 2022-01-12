import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import Logo from '../../Logo/Logo'

export default function ButtonViewPostTop(props) {
    //
    const navigation = useNavigate();
    const { scale, setScale, fullscreen, setFullscreen, length, index, setIndex } = props;
    //
    return (
        <>
            <div className='flex items-center gap-3 absolute top-3 left-3 z-50'>
                <ButtonComponent handleClick={() => navigation(-1)} className="text-white text-4xl ">
                    <i className='bx bx-x'></i>
                </ButtonComponent>
                <div className="w-12 h-12 rounded-full">
                    <Logo />
                </div>
            </div>
            {length > 0 && <>
                {index !== 0 && <ButtonComponent handleClick={() => setIndex(index - 1)} className='absolute item__flex top-1/2 transform -translate-y-1/2 mx-2 w-12 h-12 
                rounded-full bg-gray-200 bx bx-chevron-left text-4xl flex justify-center items-center hover:bg-gray-300 
                left-0 cursor-pointer z-50'>
                </ButtonComponent>}

                {index !== length - 1 && length !== 0 && <ButtonComponent handleClick={() => setIndex(index + 1)} className='absolute top-1/2 item__flex transform -translate-y-1/2 mx-2 w-12 h-12 rounded-full 
                bg-gray-200 bx bx-chevron-right text-4xl flex justify-center items-center hover:bg-gray-300 
                right-0 cursor-pointer z-50'>
                </ButtonComponent>}
            </>}
            <div className='flex items-center absolute top-3 gap-5 z-50 text-3xl p-3 right-3 text-white'>
                <i onClick={() => {
                    if (scale === 175)
                        return;
                    setScale(scale + 20)
                }} className='bx bx-zoom-in cursor-pointer'></i>
                <i onClick={() => {
                    if (scale === 75)
                        return;
                    setScale(scale - 20)
                }} className='bx bx-zoom-out cursor-pointer'></i>
                <i onClick={() => setFullscreen(!fullscreen)} className='bx bx-fullscreen  cursor-pointer'></i>
            </div>
        </>
    )
}
