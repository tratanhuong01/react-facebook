import React, { memo, useEffect, useState } from 'react'
import FooterItemPost from './FooterItemPost/FooterItemPost';
import TypeCommentInput from '../Comment/TypeCommentInput/TypeCommentInput';
import ItemComment from '../Comment/ItemComent/ItemComment';
import ItemPostTop from './ItemPostTop/ItemPostTop';
import ContentPost from './ContentPost/ContentPost';
import LoadingPost from './LoadingPost';
import { useSelector } from 'react-redux';

export default memo(function ItemPost(props) {
    //
    const { socket, user } = useSelector((state) => {
        return {
            user: state.user,
            socket: state.socket
        }
    });
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
                                [data].concat([...clone.commentDetailList[index].commentPostLevel2List])
                            setPostDetail(clone);
                        }
                    } else {
                        setPostDetail({
                            ...postDetail, commentDetailList: [{
                                commentPostLevel1: data,
                                commentPostLevel2List: []
                            }].concat([...postDetail.commentDetailList])
                        });
                    }
                }
            }
        }
        if (props.postDetail) {
            socket.on(`receiveCommentPost.${props.postDetail.post.id}`, handleEvent);
        }
        return () => {
            socket.off(`receiveCommentPost.${props.postDetail.post.id}`, handleEvent);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postDetail])
    useEffect(() => {
        setPostDetail(props.postDetail);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.postDetail])
    //
    return (
        postDetail ? <div className={`w-full bg-white dark:bg-dark-second shadow-lv1 ${props.margin ? 'my-4' : ''} 
        py-4 px-2 rounded-lg`}>
            <ItemPostTop postDetail={postDetail} />
            {postDetail.post.content && !postDetail.post.backgroundPost && <p className='my-1 dark:text-gray-300 w-full p-1'>
                {postDetail.post.content}
            </p>}
            {!props.hideContent && <ContentPost postDetail={postDetail} />}
            <div className="w-full my-4 mx-0">
                <FooterItemPost postDetail={postDetail} setPostDetail={setPostDetail} />
            </div>
            <div className="w-full">
                {postDetail ? postDetail.commentDetailList.map((commentDetail) =>
                    <ItemCommentPostMain key={commentDetail.commentPostLevel1.id} commentDetail={commentDetail} postDetail={postDetail}
                        setPostDetail={setPostDetail} />
                ) : ""}
            </div>
            <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment}
                postDetail={postDetail} setPostDetail={setPostDetail} />
        </div> : <LoadingPost />
    )
})

const ItemCommentPostMain = (props) => {
    //
    const { commentDetail, postDetail, setPostDetail } = props;
    const [dataComment, setDataComment] = useState({ value: null, content: "", type: 0 });
    const [reply, setReply] = useState();
    //
    return (
        <>
            <ItemComment setReply={setReply} commentPost={commentDetail.commentPostLevel1}
                key={commentDetail.commentPostLevel1.id} />
            <div className='w-11/12 ml-auto'>
                {reply && <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment}
                    postDetail={postDetail} setPostDetail={setPostDetail} reply={true} commentDetail={commentDetail} />}
                {commentDetail.commentPostLevel2List.map(commentPost =>
                    <ItemComment setReply={setReply} commentPost={commentPost} key={commentPost.id} />)}
            </div>
        </>
    )
}