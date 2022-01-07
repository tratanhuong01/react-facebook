import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import api from '../api/api'
import HeaderLoggedRight from '../components/Header/HeaderLogged/HeaderLoggedRight/HeaderLoggedRight'
import ItemPost from '../components/ItemPost/ItemPost'
import ButtonViewPostTop from '../components/ViewPost/ButtonViewPostTop/ButtonViewPostTop'
import WrapperLogged from './WrapperLogged'

export default function ViewPost(props) {
    //
    const { id } = useParams();
    const headers = useSelector((state) => state.headers);
    const [postDetail, setPostDetail] = useState();
    const [fullscreen, setFullscreen] = useState(false);
    const [index, setIndex] = useState(-1);
    const [scale, setScale] = useState(100);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`posts/${id}`, 'GET', null, headers);
            if (unmounted) return;
            if (result.data) {
                setPostDetail(result.data);
                setIndex(0);
            }
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <WrapperLogged hideHeader={true} hideChat={true} hideMessage={true}>
            <div className='w-full h-screen flex'>
                <div className={`${fullscreen ? 'w-full' : 'w-3/4'} item__hover h-full relative bg-black flex 
                justify-center items-center`}>
                    <ButtonViewPostTop fullscreen={fullscreen} setFullscreen={setFullscreen}
                        scale={scale} setScale={setScale} setIndex={setIndex} index={index}
                        length={postDetail ? postDetail.imageVideoPostList.length : 0} />
                    {postDetail && index !== -1 &&
                        <>
                            <div className='w-full h-full flex justify-center items-center max-w-full 
                            max-h-full relative z-0 overflow-hidden'>
                                <img src={postDetail.imageVideoPostList[index].src} alt=''
                                    className='object-cover' style={{
                                        transform: `scale(${(scale) / 100})`
                                    }} />
                            </div>
                        </>
                    }
                </div>
                <div className={`${fullscreen ? 'hidden' : 'w-1/4 h-full overflow-hidden'}`}>
                    <div className='w-full absolute top-0 p-1 border-b-2 border-solid border-gray-300 shadow-lv1'>
                        <HeaderLoggedRight hideImage={true} />
                    </div>
                    <div className='pt-16 w-full h-full scrollbar-css overflow-y-auto'>
                        <hr></hr>
                        <ItemPost hideContent={true} postDetail={postDetail} margin={false} />
                    </div>
                </div>
            </div>
        </WrapperLogged>
    )
}
