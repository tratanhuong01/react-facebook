import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../api/api';
import { AVATAR_DEFAULT } from '../../../../constants/Config';
import { CONTENT_MODAL_DELETE_POST, NAME_BUTTON_MODAL_DELETE_POST, TITLE_MODAL_DELETE_POST } from '../../../../constants/ModalWarningConfig';
import { ModalContext } from '../../../../contexts/ModalContext/ModalContext'
import * as usersAction from "../../../../actions/user/index";

export default function PostTopRight({ user, post }) {
    //
    const { modalsDispatch, modalsAction } = useContext(ModalContext);
    const { headers, posts: { list } } = useSelector(state => {
        return {
            headers: state.headers,
            posts: state.posts
        }
    });
    const dispatch = useDispatch();
    const handleEvent = async (setData) => {
        if (typeof setData === "function")
            setData();
        await api(`posts?idPost=${post.id}`, 'DELETE', null, headers);
        switch (post.typePost) {
            case 0:
                const formData = new FormData();
                formData.append("multipartFile", null);
                formData.append("id", new Date().getTime());
                formData.append("publicId", "Avatars/");
                formData.append("typeFile", "image");
                await api(`deleteFile`, 'POST', formData, headers);
                const dataUser = await api('users', 'PUT', { ...user, avatar: AVATAR_DEFAULT }, headers);
                dispatch({
                    type: "UPDATE_DATA_POST_LIST",
                    key: "list",
                    value: [...list].filter(dt => dt.post.id !== post.id)
                });
                dispatch(usersAction.loginUser(dataUser.data));
                break;

            default:
                break;
        }
        modalsDispatch(modalsAction.closeModal());
    }
    //
    return (
        user.id === post.userPost.id ? <>
            {post.typePost === 2 && <span onClick={() => {
                modalsDispatch(modalsAction.openModalDeletePost(""))
            }} className='bx bx-edit-alt absolute top-0 right-8 text-xl text-gray-800 hover:text-main 
            cursor-pointer dark:text-gray-300' ></span>}
            <span onClick={() => {
                modalsDispatch(modalsAction.openModalDeletePost(
                    TITLE_MODAL_DELETE_POST, CONTENT_MODAL_DELETE_POST, NAME_BUTTON_MODAL_DELETE_POST,
                    handleEvent
                ))
            }} className='bx bx-trash-alt absolute top-0 right-1 text-xl text-gray-800 hover:text-main
            cursor-pointer dark:text-gray-300' ></span>
        </> : ""
    )
}
