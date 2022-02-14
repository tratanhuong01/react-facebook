import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../../api/api'
import { ModalContext } from '../../../contexts/ModalContext/ModalContext'
import { PostContext } from '../../../contexts/PostContext/PostContext'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import ImageVideoPreview from '../../ItemPost/ImageVideoPreview/ImageVideoPreview'
import ModalWrapper from '../ModalWrapper'
import BottomWritePostModal from './BottomWritePostModal/BottomWritePostModal'
import CenterWritePostModal from './CenterWritePostModal/CenterWritePostModal'
import TopWritePostModal from './TopWritePostModal/TopWritePostModal'
import * as StringUtils from "../../../utils/StringUtils";

export default function ModalPost(props) {
    //
    const { posts, postsAction, postsDispatch } = useContext(PostContext);
    const { user, headers, posts: { list, add } } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            posts: state.posts
        }
    })
    const [emojiShow, setEmojiShow] = useState(false);
    const { modalsDispatch, modalsAction } = useContext(ModalContext);
    const dispatch = useDispatch();
    const hanlePost = async () => {
        modalsDispatch(modalsAction.loadingModal(true));
        let postNew = {
            activity: JSON.stringify(posts.activity),
            answerQuestion: null,
            backgroundPost: null,
            content: posts.content,
            feel: JSON.stringify(posts.feel),
            id: posts.id,
            local: JSON.stringify(posts.local),
            timeCreated: posts.edit ? posts.edit.timeCreated : posts.edit,
            typePost: 2,
            userPost: user
        }
        let uploadImage = false;
        if (posts.background) {
            postNew = { ...postNew, backgroundPost: JSON.stringify(posts.background) }
        }
        else if (posts.answerQuestion) {
            postNew = {
                ...postNew, answerQuestion: JSON.stringify({
                    ...posts.answerQuestion,
                    contentAnswerQuestion: posts.contentAnswerQuestion
                })
            }
        }
        else {
            uploadImage = true;
        }
        let post = await api(`posts`, posts.id ? 'PUT' : 'POST', postNew, headers);
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
                    formData.append("typeFile", StringUtils.checkImageOrVideoToString(imageVideo.name));
                    const imageUpload = await api(`uploadFile`, 'POST', formData, headers);
                    await api(`imageVideoPosts`, 'POST', {
                        id: null,
                        postImageVideoPost: post.data,
                        src: imageUpload.data.url,
                        typeImageVideoPost: StringUtils.checkImageOrVideoToNumber(imageVideo.name),
                        timeCreated: null,
                    }, { ...headers, "Content-Type": "application/json" });
                }
            }
            const handle = async () => {
                post = await api(`posts/${post.data.id}`, 'GET', null, headers);
                let data;
                if (posts.id) {
                    let index = [...list].findIndex(dt => dt.post.id = posts.id);
                    if (index !== -1) {
                        let listClone = [...list];
                        listClone[index] = post.data;
                        data = listClone;
                    }
                }
                else {
                    data = [post.data, ...list];
                }
                dispatch({
                    type: "UPDATE_DATA_POST_LIST",
                    key: "list",
                    value: data
                })
            }
            if (add && !posts.id) handle()
            if (posts.id && posts.edit) {
                handle();
            }
            modalsDispatch(modalsAction.closeModal());
        };
    }
    useEffect(() => {
        //
        let unmounted = false;
        const checkNull = (data) => {
            return data ? JSON.parse(data) : null
        }
        const fetch = async () => {
            if (posts.id) {
                modalsDispatch(modalsAction.loadingModal(true));
                const result = await api(`posts/${posts.id}`, 'GET', null, headers);
                if (unmounted) return;
                postsDispatch(postsAction.updateDataFull({
                    ...posts, tags: result.data.tagPostList,
                    feel: checkNull(result.data.post.feel),
                    activity: checkNull(result.data.post.activity),
                    content: result.data.post.content,
                    background: checkNull(result.data.post.backgroundPost),
                    contentAnswerQuestion: "",
                    imageVideoUpload: result.data.imageVideoPostList.length > 0 ? true : false,
                    usingBackground: checkNull(result.data.post.backgroundPost),
                    answerQuestion: checkNull(result.data.post.answerQuestion),
                    imageVideo: result.data.imageVideoPostList,
                    edit: result.data.post,
                    local: checkNull(result.data.post.local),
                    save: true,
                }))
                modalsDispatch(modalsAction.loadingModal(false));
            }
        }
        if (!posts.save) {
            fetch();
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts.id, posts.save])
    //
    return (
        <ModalWrapper className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
            z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
            shadow-lv1 dark:border-dark-third dark:bg-dark-third" title={`${posts.id ? `Sửa` : `Tạo`} bài viết`}>
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
                        || posts.tags.length > 0 || posts.feel || posts.local || posts.background || posts.answerQuestion
                        ? false : true}>
                    {posts.id ? 'Sửa' : 'Đăng'}
                </ButtonComponent>
            </div>
        </ModalWrapper >
    )
}
