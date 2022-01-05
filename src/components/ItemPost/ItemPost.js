import React, { useState } from 'react'
import FooterItemPost from './FooterItemPost/FooterItemPost';
import TypeCommentInput from '../Comment/TypeCommentInput/TypeCommentInput';
import ItemComment from '../Comment/ItemComent/ItemComment';
import ItemPostTop from './ItemPostTop/ItemPostTop';
import ContentPost from './ContentPost/ContentPost';

export default function ItemPost(props) {
    //
    const [postDetail, setPostDetail] = useState(props.postDetail);
    const [dataComment, setDataComment] = useState({ value: null, content: "", type: 0 });
    //
    return (
        postDetail ? <div className="w-full bg-white dark:bg-dark-second my-4 shadow-lv1 py-4 px-2 rounded-lg">
            <ItemPostTop postDetail={postDetail} />
            {postDetail.post.content && !postDetail.post.backgroundPost && <p className='my-1 dark:text-gray-300 w-full p-1'>
                {postDetail.post.content}
            </p>}
            <ContentPost postDetail={postDetail} />
            <div className="w-full my-4 mx-0">
                <FooterItemPost postDetail={postDetail} />
            </div>
            <div className="w-full">
                {postDetail ? postDetail.commentDetailList.map((commentDetail) =>
                    <ItemCommentPostMain key={commentDetail.commentPostLevel1.id} commentDetail={commentDetail} postDetail={postDetail}
                        setPostDetail={setPostDetail} />
                ) : ""}
            </div>
            <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment}
                postDetail={postDetail} setPostDetail={setPostDetail} />
        </div> : ""
    )
}

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