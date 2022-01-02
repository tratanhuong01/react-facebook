import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../api/api';
import ButtonComponent from '../../../ButtonComponent/ButtonComponent';
import * as usersAction from "../../../../actions/user/index";
import { UserProfileContext } from '../../../../contexts/UserProfileContext/UserProfileContext';

export default function UpdateCoverImage(props) {
    //
    const dispatch = useDispatch();
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    const [loading, setLoading] = useState(false);
    const { userProfile: { postList }, userProfilesDispatch, userProfilesAction } = useContext(UserProfileContext);
    const { setCover, cover, refLoadingCover } = props;
    const handleUpdateCoverImage = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("multipartFile", cover);
        formData.append("id", new Date().getTime());
        formData.append("publicId", "Covers/");
        formData.append("typeFile", "image");
        if (refLoadingCover.current) {
            refLoadingCover.current.style.display = "flex";
        }
        const post = await api(`posts`, 'POST', {
            id: null,
            userPost: user,
            content: null,
            feel: null,
            local: null,
            activity: null,
            answerQuestion: null,
            backgroundPost: null,
            typePost: 1,
            timeCreated: null,
        }, headers);
        const image = await api(`uploadFile`, 'POST', formData, headers);
        await api(`imageVideoPosts`, 'POST', {
            id: null,
            postImageVideoPost: post.data,
            src: image.data.url,
            typeImageVideoPost: "image",
            timeCreated: null,
        }, { ...headers, "Content-Type": "application/json" });
        const userUpdate = await api(`users`, 'PUT', { ...user, cover: image.data.url }, headers);
        dispatch(usersAction.loginUser(userUpdate.data));
        setCover(image.data.url);
        if (refLoadingCover.current) {
            refLoadingCover.current.style.display = "none";
        }
        const postNew = await api(`posts/${post.data.id}`, 'GET', {}, headers);
        userProfilesDispatch(userProfilesAction.updateData('postList', [postNew.data].concat([...postList])));
    }
    //
    return (
        <div className='w-full p-4 flex bg-black bg-opacity-50 fixed top-16 z-50 justify-between items-center'>
            <p className='text-white flex items-center'>
                <i className='bx bx-globe text-2xl mr-2' ></i>Ảnh bìa của bạn hiển thị công khai.
            </p>
            <div className='flex items-center gap-2'>
                <ButtonComponent handleClick={() => setCover(user.cover)} className='rounded-md px-8 py-2 font-semibold 
                     text-white bg-black bg-opacity-20'>
                    Huỷ
                </ButtonComponent>
                <ButtonComponent handleClick={handleUpdateCoverImage} disabled={loading}
                    className=' rounded-md px-10 py-2 font-semibold bg-main text-white'>
                    {loading ? <i className='bx bx-shape-circle fa-spin'></i> : 'Lưu thay đổi'}
                </ButtonComponent>
            </div>
        </div>
    )
}
