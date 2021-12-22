import React, { useContext } from 'react'
import { PostContext } from '../../../contexts/PostContext/PostContext'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import ImageVideoPreview from '../../ItemPost/ImageVideoPreview/ImageVideoPreview'
import ModalWrapper from '../ModalWrapper'
import BottomWritePostModal from './BottomWritePostModal/BottomWritePostModal'
import CenterWritePostModal from './CenterWritePostModal/CenterWritePostModal'
import TopWritePostModal from './TopWritePostModal/TopWritePostModal'

export default function ModalPost(props) {
    //
    const { posts } = useContext(PostContext);
    //
    return (
        <ModalWrapper className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white w-full absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 sm:w-10/12 md:w-2/3 
        lg:w-2/3 xl:w-36% shadow-lv1">
            <div className='w-full relative'>
                <p className="text-2xl font-bold p-2.5 -mt-1.5 text-center dark:text-white">Tạo bài viết</p>
                <TopWritePostModal />
                <div className="w-full mt-2.5 wrapper-content-right overflow-y-auto" style={{ maxHeight: 365 }}>
                    <CenterWritePostModal />
                    {posts.imageVideoUpload && <ImageVideoPreview />}
                </div>
                <div className='w-full px-2'>
                    <BottomWritePostModal />
                </div>
                <div className="w-full px-2 text-center my-2.5 mx-0">
                    <ButtonComponent className="w-full p-2.5 border-none rounded-lg font-bold" type="button" bgColor='bg-main text-white'
                        disabled={posts.content.length > 0 || posts.tags.length > 0 || posts.feel || posts.local ? false : true}>
                        Đăng
                    </ButtonComponent>
                </div>
            </div>
        </ModalWrapper >
    )
}
