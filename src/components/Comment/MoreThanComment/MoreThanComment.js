import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import ButtonComponent from '../../ButtonComponent/ButtonComponent'

export default function MoreThanComment(props) {
    //
    const headers = useSelector((state) => state.headers);
    const { setPostDetail, postDetail, index, setIndex, reply, idComment } = props;
    const [loading, setLoading] = useState();
    const handleClick = async () => {
        setLoading(true);
        setIndex(index + 2);
        const result = await api(`commentPosts/${reply ? `level2?idComment=${idComment}` :
            `level1?idPost=${postDetail.post.id}`}&offset=${index + 2}&limit=${2}`,
            'GET', null, headers);
        if (reply) {
            const pos = postDetail.commentDetailList.findIndex(item => item.commentPostLevel1.commentPost.id === idComment);
            if (pos !== -1) {
                let clone = { ...postDetail };
                clone.commentDetailList[pos].commentPostLevel2List =
                    [...clone.commentDetailList[pos].commentPostLevel2List].concat(result.data);
                setPostDetail({ ...clone });
            }
        }
        else {
            setPostDetail({ ...postDetail, commentDetailList: [...postDetail.commentDetailList].concat(result.data) });
        }
        setLoading();
    }
    //
    return (
        <ButtonComponent handleClick={handleClick} className='py-1 text-sm font-semibold text-gray-500 cursor-pointer'>
            {loading ? <i className="fas fa-circle-notch text-2xl text-gray-500 mx-9 fa-spin"></i>
                : 'Xem thêm bình luận'}
        </ButtonComponent>
    )
}
