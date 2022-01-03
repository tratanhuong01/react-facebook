import React, { useState } from 'react'
import FooterItemPost from './FooterItemPost/FooterItemPost';
import TypeCommentInput from '../Comment/TypeCommentInput/TypeCommentInput';
import ItemComment from '../Comment/ItemComent/ItemComment';
import ItemPostTop from './ItemPostTop/ItemPostTop';
import ContentPost from './ContentPost/ContentPost';

export default function ItemPost(props) {
    //
    const { postDetail } = props;
    const [dataComment, setDataComment] = useState({ value: null, content: "", type: -1 });
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
                {postDetail ? postDetail.commentDetailList.map((commentDetail, index) =>
                    <>
                        <ItemComment commentPost={commentDetail.commentPostLevel1} key={index} />
                        <div>
                            {postDetail.commentDetail.commentPostLevel2List.map(commentPost =>
                                <ItemComment commentPost={commentPost} key={commentPost.id} />)}
                        </div>
                    </>)
                    : ""}
            </div>
            <TypeCommentInput dataComment={dataComment} setDataComment={setDataComment} />
        </div> : ""
    )
}
