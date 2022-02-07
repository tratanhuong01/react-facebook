import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import PreviewImageComment from '../PreviewImageComment/PreviewImageComment'
import CategoryInputComment from './CategoryInputComment/CategoryInputComment'
import { v4 } from 'uuid';

export default function TypeCommentInput(props) {
    //
    const { dataComment, setDataComment, postDetail, setPostDetail, reply, commentDetail } = props;
    const { headers, user, socket } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers,
            socket: state.socket
        }
    });
    const refContent = useRef();
    const handleSendComment = async (dataComment) => {
        const id = v4();
        let imageUpload = null;
        const { value, content, type } = dataComment;
        refContent.current.innerText = "";
        const object = {
            id: null,
            userCommentPost: user,
            postCommentPost: postDetail.post,
            content: content,
            dataComment: JSON.stringify(dataComment),
            typeComment: type,
            timeCreated: null,
            replyComment: reply ? commentDetail.commentPostLevel1.commentPost.id : null,
        }
        setDataComment({ value: null, content: "", type: 0 })
        if (!reply) {
            setPostDetail({
                ...postDetail, commentDetailList: [{
                    commentPostLevel1: {
                        commentPost: { ...object, id: id },
                        feelCommentList: [],
                        loading: true,
                    },
                    commentPostLevel2List: []
                }].concat([...postDetail.commentDetailList])
            });
        }
        else {
            const index = postDetail.commentDetailList.findIndex(data => data.commentPostLevel1.commentPost.id
                === commentDetail.commentPostLevel1.commentPost.id);
            if (index !== -1)
                postDetail.commentDetailList[index].commentPostLevel2List =
                    [{
                        commentPost: { ...object, id: id },
                        feelCommentList: [],
                        loading: true,
                    }].concat([...postDetail.commentDetailList[index].commentPostLevel2List])
        }
        if (type === 1) {
            const formData = new FormData();
            formData.append("multipartFile", value);
            formData.append("id", new Date().getTime());
            formData.append("publicId", "Comments/");
            formData.append("typeFile", "image");
            imageUpload = await api(`uploadFile`, 'POST', formData, headers);
        }
        const result = await api(`commentPosts`, 'POST', {
            ...object, id: null, dataComment:
                JSON.stringify({ ...dataComment, value: imageUpload ? imageUpload.data.url : value })
        }, headers);
        if (!reply) {
            setPostDetail({
                ...postDetail, commentDetailList: [{
                    commentPostLevel1: {
                        commentPost: result.data,
                        feelCommentList: []
                    },
                    commentPostLevel2List: []
                }].concat([...postDetail.commentDetailList].filter(data => data.commentPostLevel1.commentPost.id !== id))
            })
        }
        else {
            const index = postDetail.commentDetailList.findIndex(data => data.commentPostLevel1.commentPost.id
                === commentDetail.commentPostLevel1.commentPost.id);
            if (index !== -1) {
                let clone = { ...postDetail };
                clone.commentDetailList[index].commentPostLevel2List =
                    [{
                        commentPost: result.data,
                        feelCommentList: []
                    }].concat([...clone.commentDetailList[index].commentPostLevel2List].filter(
                        data => data.commentPost.id !== id
                    ))
                setPostDetail(clone);
            }

        }
        socket.emit(`sendCommentPost`, result.data)
    }
    //
    return (
        <>
            <div className="w-full mx-0 my-2 flex relative">
                <img className="w-12 h-12 p-0.5 object-cover rounded-full border-2 border-solid"
                    src={user.avatar}
                    alt="" />
                <div className=" ml-2 relative bg-gray-100 dark:bg-dark-third overflow-hidden rounded-full" style={{ width: "calc(100% - 54px)" }}>
                    <div ref={refContent} onInput={(event) => {
                        setDataComment({ ...dataComment, content: event.currentTarget.textContent })
                    }} onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            event.preventDefault();
                            handleSendComment(dataComment)
                        }
                    }} className="border-none pl-3 outline-none bg-gray-100 dark:bg-dark-third
                    dark:text-white py-3 "
                        style={{ minHeight: 30, width: "96%" }} contentEditable={true}
                        placeholder="Viết bình luận..."></div>
                </div>
                <CategoryInputComment setDataComment={setDataComment} dataComment={dataComment}
                    handleSendComment={handleSendComment} ref={refContent} />
            </div>
            {
                dataComment.value && dataComment.value.name && <PreviewImageComment dataComment={dataComment}
                    setDataComment={setDataComment} />
            }
        </>
    )
}
