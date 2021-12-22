import React, { useContext, useEffect } from 'react'
import { PostContext, PostProvider } from '../../../contexts/PostContext/PostContext'

export default function ModalWrapperPost(props) {
    //
    const { feel, imageVideo } = props;
    //
    return (
        <PostProvider>
            <ContainerModalPost feel={feel} imageVideo={imageVideo} />
        </PostProvider>
    )
}

const ContainerModalPost = (props) => {
    const { posts, postsDispatch, postsAction } = useContext(PostContext);
    const { feel, imageVideo } = props;
    useEffect(() => {
        //
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
    }, [feel, postsDispatch, postsAction, imageVideo]);
    return (
        posts.component
    )
}