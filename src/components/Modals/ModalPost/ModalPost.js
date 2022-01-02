import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../api/api'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext'
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
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const [emojiShow, setEmojiShow] = useState(false);
    const { modalsDispatch, modalsAction } = useContext(ModalContext);
    const hanlePost = async () => {
        modalsDispatch(modalsAction.loadingModal(true));
        const postNew = {
            activity: posts.activity,
            answerQuestion: null,
            backgroundPost: null,
            content: posts.content,
            feel: posts.feel,
            id: null,
            local: posts.local,
            timeCreated: null,
            typePost: 2,
            userPost: user
        }
        let post = null;
        let uploadImage = false;
        if (posts.background) {
            post = await api(`posts`, 'POST', { ...postNew, backgroundPost: JSON.stringify(posts.background) }, headers);
        }
        else if (posts.answerQuestion) {
            post = await api(`posts`, 'POST', {
                ...postNew, answerQuestion: JSON.stringify({
                    ...posts.answerQuestion,
                    contentAnswerQuestion: posts.contentAnswerQuestion
                })
            }, headers);
        }
        else {
            post = await api(`posts`, 'POST', postNew, headers);
            uploadImage = true;
        }
        if (post.data) {
            for (let index = 0; index < posts.tags.length; index++) {
                const tag = posts.tags[index];
                await api('tagsPosts', 'POST', {
                    id: null,
                    userTagPost: tag,
                    postTagPost: post.data,
                    timeCreated: null
                }, headers)
            }
            if (uploadImage) {
                for (let index = 0; index < posts.imageVideo.length; index++) {
                    const imageVideo = posts.imageVideo[index];
                    const formData = new FormData();
                    formData.append("multipartFile", imageVideo);
                    formData.append("id", new Date().getTime());
                    formData.append("publicId", "Posts/");
                    formData.append("typeFile", "image");
                    const imageUpload = await api(`uploadFile`, 'POST', formData, headers);
                    await api(`imageVideoPosts`, 'POST', {
                        id: null,
                        postImageVideoPost: post.data,
                        src: imageUpload.data.url,
                        typeImageVideoPost: "image",
                        timeCreated: null,
                    }, { ...headers, "Content-Type": "application/json" });
                }
            }
        }
        modalsDispatch(modalsAction.closeModal());
    }

    //
    return (
        <ModalWrapper className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 w-11/12 sm:w-10/12 md:w-2/3 
        lg:w-2/3 xl:w-36% shadow-lv1 dark:border-dark-third dark:bg-dark-third" title={'Tạo bài viết'}>
            <TopWritePostModal />
            <div className={`w-full mt-2.5 wrapper-content-right ${emojiShow ? '' : 'overflow-y-auto'}`} style={{ maxHeight: 365 }}>
                <CenterWritePostModal setEmojiShow={setEmojiShow} emojiShow={emojiShow} />
                {posts.imageVideoUpload && <ImageVideoPreview />}
            </div>
            <div className='w-full px-2'>
                <BottomWritePostModal />
            </div>
            <div className="w-full px-2 text-center my-2.5 mx-0">
                <ButtonComponent handleClick={hanlePost} className="w-full p-2.5 border-none rounded-lg font-bold" type="button" bgColor='bg-main text-white'
                    disabled={posts.content.length > 0 || posts.activity || posts.imageVideo.length > 0
                        || posts.tags.length > 0 || posts.feel || posts.local ? false : true}>
                    Đăng
                </ButtonComponent>
            </div>
        </ModalWrapper >
    )
}
