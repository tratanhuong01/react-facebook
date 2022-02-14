import React, { useContext, useEffect } from 'react'
import { PostContext, PostProvider } from '../../../contexts/PostContext/PostContext'

export default function ModalWrapperPost({ feel, imageVideo, id }) {
    //
    //
    return (
        <PostProvider>
            <ContainerModalPost feel={feel} imageVideo={imageVideo} id={id} />
        </PostProvider>
    )
}

const ContainerModalPost = ({ feel, imageVideo, id }) => {
    const { posts, postsDispatch, postsAction } = useContext(PostContext);
    useEffect(() => {
        //
        if (id) {
            postsDispatch(postsAction.updateData('id', id));
        }
        if (feel) {
            postsDispatch(postsAction.openModalFeel());
        }
        if (imageVideo) {
            if (imageVideo.length > 0) {
                postsDispatch(postsAction.updateData('imageVideo', imageVideo));
                postsDispatch(postsAction.updateData('imageVideoUpload', true));
            }
        }
        //
    }, [feel, postsDispatch, postsAction, imageVideo, id]);
    return (
        posts.component
    )
}