import React, { memo, useEffect, useState } from 'react'
import FooterItemPost from './FooterItemPost/FooterItemPost';
import TypeCommentInput from '../Comment/TypeCommentInput/TypeCommentInput';
import ItemPostTop from './ItemPostTop/ItemPostTop';
import ContentPost from './ContentPost/ContentPost';
import LoadingPost from './LoadingPost';
import { useSelector } from 'react-redux';
import ItemCommentPostMain from '../Comment/ItemCommentPostMain';
import MoreThanComment from '../Comment/MoreThanComment/MoreThanComment';

export default memo(function ItemPost(props) {
    //
    const { socket, user } = useSelector((state) => {
        return {
            user: state.user,
            socket: state.socket
        }
    });
    const [index, setIndex] = useState(0);
    const [postDetail, setPostDetail] = useState(props.postDetail);
    const [dataComment, setDataComment] = useState({ value: null, content: "", type: 0 });
    useEffect(() => {
        const handleEvent = (data) => {
            if (data) {
                if (data.userCommentPost.id !== user.id) {
                    if (data.replyComment) {
                        const index = postDetail.commentDetailList.findIndex(item => item.commentPostLevel1.id
                            === data.replyComment);
                        if (index !== -1) {
                            let clone = { ...postDetail };
                            clone.commentDetailList[index].commentPostLevel2List =
                                [{
                                    commentPost: data,
                                    feelCommentList: [],
                                }].concat([...clone.commentDetailList[index].commentPostLevel2List])
                            setPostDetail(clone);
                        }
                    } else {
                        setPostDetail({
                            ...postDetail, commentDetailList: [{
                                commentPostLevel1: {
                                    commentPost: data,
                                    feelCommentList: [],
                                },
                                commentPostLevel2List: []
                            }].concat([...postDetail.commentDetailList])
                        });
                    }
                }
            }
        }
        if (postDetail) {
            socket.on(`receiveCommentPost.${postDetail.post.id}`, handleEvent);
        }
        return () => {
            if (props.postDetail) {
                socket.off(`receiveCommentPost.${postDetail.post.id}`, handleEvent);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postDetail])
    useEffect(() => {
        setPostDetail(props.postDetail);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.postDetail]);
    //
    return (
        postDetail ? <div className={`w-full bg-white dark:bg-dark-second shadow-lv1 ${props.margin ? 'my-4' : ''} 
        py-4 px-2 rounded-lg mb-3`}>
            <ItemPostTop postDetail={postDetail} />
            {postDetail.post.content && !postDetail.post.backgroundPost && <p className='my-1 dark:text-gray-300 w-full p-1'>
                {postDetail.post.content}
            </p>}
            {!props.hideContent && <ContentPost postDetail={props.postDetail} />}
            <div className="w-full mb-4 mx-0">
                <FooterItemPost postDetail={postDetail} setPostDetail={setPostDetail} />
            </div>
            <div className="w-full">
                {postDetail ? postDetail.commentDetailList.map((commentDetail) =>
                    <ItemCommentPostMain key={commentDetail.commentPostLevel1.commentPost.id} commentDetail={commentDetail} postDetail={postDetail}
                        setPostDetail={setPostDetail} />
                ) : ""}
            </div>
            {postDetail.commentLevel1Length - postDetail.commentDetailList.length > 0 &&
                <MoreThanComment postDetail={postDetail} setPostDetail={setPostDetail} index={index}
                    setIndex={setIndex} />}
            <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment}
                postDetail={postDetail} setPostDetail={setPostDetail} />
        </div> : <LoadingPost />
    )
})
