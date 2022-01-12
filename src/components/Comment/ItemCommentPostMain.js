import React, { useState } from 'react'
import ItemComment from './ItemComent/ItemComment';
import MoreThanComment from './MoreThanComment/MoreThanComment';
import TypeCommentInput from './TypeCommentInput/TypeCommentInput';

export default function ItemCommentPostMain(props) {
    //
    const { commentDetail, postDetail, setPostDetail } = props;
    const [dataComment, setDataComment] = useState({ value: null, content: "", type: 0 });
    const [reply, setReply] = useState();
    const [index, setIndex] = useState(0);
    //
    return (
        <>
            <ItemComment setReply={setReply} commentPost={commentDetail.commentPostLevel1}
                key={commentDetail.commentPostLevel1.id} />
            <div className='w-11/12 ml-auto'>
                {reply && <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment}
                    postDetail={postDetail} setPostDetail={setPostDetail} reply={true} commentDetail={commentDetail} />}
                {commentDetail.commentPostLevel2List.map(commentPost =>
                    <ItemComment setReply={setReply} commentPost={commentPost} key={commentPost.commentPost.id} />)}
                {commentDetail.commentLevel2Length - commentDetail.commentPostLevel2List.length > 0 &&
                    <MoreThanComment postDetail={postDetail} setPostDetail={setPostDetail} index={index}
                        setIndex={setIndex} reply={true} idComment={commentDetail.commentPostLevel1.commentPost.id} />}
            </div>
        </>
    )
}
