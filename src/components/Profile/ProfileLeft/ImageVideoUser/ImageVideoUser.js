import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import api from '../../../../api/api';
import { PAGE_VIEW_POST } from '../../../../constants/Config';
import { UserProfileContext } from '../../../../contexts/UserProfileContext/UserProfileContext';
import * as StringUtils from "../../../../utils/StringUtils";

export default function ImageVideoUser() {
    //
    const { headers } = useSelector(state => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const { userProfile: { userProfile } } = useContext(UserProfileContext);
    const navigation = useNavigate();
    const [imageVideos, setImageVideos] = useState();
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`imageVideoPosts?idUser=${userProfile.id}&offset=0&limit=9&type=-1`, 'GET', null, headers);
            if (unmounted) return;
            setImageVideos(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userProfile, setImageVideos, headers])
    //
    return (
        <>
            <div className="w-full flex">
                <div className="w-full mt-2.5 mr-2.5">
                    <p className="font-bold dark:text-white">Ảnh/Video<br /></p>
                </div>
                <div className="w-full text-right mt-2.5 mr-2.5 text-main">
                    Xem tất cả
                </div>
            </div>
            <div className="w-full pt-4 pl-0.5 flex flex-wrap">
                {imageVideos && imageVideos.map(imageVideo =>
                    <div onClick={() => {
                        navigation(PAGE_VIEW_POST + `/${imageVideo.postImageVideoPost.id}`)
                    }} className="fr-us cursor-pointer" key={imageVideo.id}>
                        {StringUtils.checkImageOrVideoToString(imageVideo.src) === "image" ?
                            <img
                                className="object-cover rounded-lg"
                                src={imageVideo.src}
                                alt="" /> :
                            <div className=' relative'>
                                <video
                                    className="object-cover rounded-lg"
                                    src={imageVideo.src} />
                                <div className='fr-us__front bg-black bg-opacity-50 flex items-center 
                                justify-center text-2xl'>
                                    <span className='fas fa-play text-white'></span>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
        </>
    )
}
