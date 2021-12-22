import React, { useContext, useState } from 'react'
import backgrounds from '../../../config/backgrounds'
import { PostContext } from '../../../contexts/PostContext/PostContext'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import ModalWrapper from '../ModalWrapper'
import BottomWritePostModal from './BottomWritePostModal/BottomWritePostModal'
import TopWritePostModal from './TopWritePostModal/TopWritePostModal'

export default function ModalPost(props) {
    //
    const { posts, postsDispatch, postsAction } = useContext(PostContext);
    const [backgroundListShow, setBackgroundListShow] = useState(false);
    //
    return (
        <ModalWrapper className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white w-full absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 sm:w-10/12 md:w-2/3 
        lg:w-2/3 xl:w-36% shadow-lv1">
            <div className='w-full relative'>
                <p className="text-2xl font-bold p-2.5 -mt-1.5 text-center dark:text-white">Tạo bài viết</p>
                <TopWritePostModal />
                <div className="w-full mt-2.5 wrapper-content-right overflow-y-auto" style={{ maxHeight: 365 }}>
                    {posts.background ? <div className='relative h-80 bg-cover' style={{ [posts.background.key]: posts.background.value }}>
                        <div onInput={(e) => {
                            if (e.currentTarget.textContent.length >= 10) {
                                postsDispatch(postsAction.updateData('background', null));
                            }
                            else {
                                postsDispatch(postsAction.updateData('content', e.currentTarget.textContent))
                            }
                        }} className='text-2xl w-full px-4 flex justify-center text-white font-bold absolute top-1/2 
                        left-1/2 transform -translate-x-1/2 -translate-y-1/2 contentedit break-all text-center ' spellCheck={false}
                            contentEditable={true} defaultValue={posts.content} placeholder='Hưởng ơi , bạn đang nghĩ gì đấy ?'>
                        </div>
                    </div> :
                        <div className="w-full relative px-2">
                            <textarea onChange={(event) => {
                                postsDispatch(postsAction.updateData('content', event.target.value))
                                if (posts.usingBackground) {
                                    if (event.target.value.length < 10) {
                                        console.log("oke");
                                        postsDispatch(postsAction(postsAction.updateData('background', posts.usingBackground)))
                                    }
                                }
                            }} spellCheck={false}
                                className="w-full border-none dark:text-white text-xm px-2 pt-2 py-6 outline-none overflow-hidden dark:bg-dark-second
                                resize-none" placeholder="Hưởng ơi, Bạn đang nghĩ gì thế?" defaultValue={posts.content}></textarea>
                        </div>}
                    <div className='w-full flex -mt-4 relative px-2'>
                        {backgroundListShow ? <div onClick={() => setBackgroundListShow(false)} className='w-9 h-9 bg-gray-300 rounded-lg flex items-center 
                        justify-center cursor-pointer'><span className='bx bx-chevron-left text-2xl text-gray-800'></span></div> :
                            <img src="https://res.cloudinary.com/ensonet-dev/image/upload/v1640124392/BackgroundPosts/SATP_Aa_square-2x_a2yme5.png"
                                onClick={() => setBackgroundListShow(true)} alt='' className='w-9 h-9 object-cover rounded-lg' />}
                        {backgroundListShow && <ul className='mx-1 gap-1 flex'>
                            <li onClick={() => {
                                postsDispatch(postsAction.updateData('background', null))
                                postsDispatch(postsAction.updateData('usingBackground', null))
                            }} className={`w-9 h-9 bg-gray-100 rounded-lg bg-contain cursor-pointer`}></li>
                            {backgrounds.map(item =>
                                <li onClick={() => {
                                    postsDispatch(postsAction.updateData('background', item))
                                    postsDispatch(postsAction.updateData('usingBackground', item))
                                }} key={item.id} className={`w-9 h-9 rounded-lg bg-contain
                                 ${posts.background ? posts.background.id === item.id && 'border-2 border-solid border-white ' : ''} cursor-pointer`}
                                    style={{ [item.key]: item.value }}></li>
                            )}
                            <li onClick={() => postsDispatch(postsAction.openModalChooseBackground())} className='w-9 h-9 bg-gray-300 rounded-lg flex items-center 
                            justify-center cursor-pointer'><span className='bx bxs-grid-alt text-2xl text-gray-800'></span></li>
                        </ul>}
                        <ButtonComponent type="button" className="w-8 h-8 rounded-full bg-white flex justify-center items-center 
                        absolute right-2 top-1/2 bg-transparent outline-none dark:bg-dark-second transform -translate-y-1/2">
                            <i className="far fa-smile text-gray-500 text-2xl dark:text-gray-300"></i>
                        </ButtonComponent>
                    </div>
                    <div className="w-full mt-2.5 px-2 flex flex-wrap relative" id="imagePost">

                    </div>
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
