import React, { useContext, useEffect } from 'react'
import { PostContext, PostProvider } from '../../../contexts/PostContext/PostContext'

export default function ModalWrapperPost(props) {
    //
    const { feel, images } = props;
    //
    return (
        <PostProvider>
            <ContainerModalPost feel={feel} images={images} />
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
        if (Array.isArray(imageVideo)) {
            postsDispatch(postsAction.updateData('imageVideo', imageVideo));
        }
        //
    }, [feel, postsDispatch, postsAction, imageVideo]);
    return (
        posts.component
    )
}