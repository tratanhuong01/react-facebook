import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../api/api';
import ViewStoryLeft from '../../components/ViewStory/ViewStoryLeft/ViewStoryLeft';
import ViewStoryRight from '../../components/ViewStory/ViewStoryRight/ViewStoryRight';
import { StoryContext, StoryProvider } from '../../contexts/StoryContext/StoryContext';
import WrapperLogged from '../WrapperLogged';

export default function ViewStory() {
    //
    const [fullScreen, setFullScreen] = useState(false);
    //
    return (
        <WrapperLogged>
            <div className="w-full flex h-screen z-10 pt-16 bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full">
                <StoryProvider>
                    <WrapperViewStory fullScreen={fullScreen} setFullScreen={setFullScreen}>

                    </WrapperViewStory>
                </StoryProvider>
            </div>
        </WrapperLogged>
    )
}

const WrapperViewStory = (props) => {
    //
    const { fullScreen, setFullScreen } = props;
    const { stories: { current, main, storyList }, storiesDispatch, storiesAction } = useContext(StoryContext);
    const { headers, user } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`stories?idUser=${user.id}&offset=${0}&limit=${20}`, 'GET', null, headers);
            if (unmounted) return;
            storiesDispatch(storiesAction.updateData('storyList', result.data));
            if (result.data.length > 0) {
                storiesDispatch(storiesAction.updateData('main', result.data[0].storyList[0]));
                storiesDispatch(storiesAction.updateData('current', result.data[0]));
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
        <>
            <div className={`w-1/4 bg-white h-full dark:bg-dark-second p-4 shadow-2xl 
                        wrapper-content-right overflow-y-auto ${fullScreen ? 'hidden' : ''}`}>
                <ViewStoryLeft fullScreen={fullScreen} setFullScreen={setFullScreen} />
            </div>
            {current ? current.storyList ?
                main && current && storyList.length > 0 && <ViewStoryRight fullScreen={fullScreen} /> :
                "Heets" : "Hete"
            }
            <div onClick={() => setFullScreen(!fullScreen)} className={`text-2xl w-10 h-10 rounded-full bg-gray-200 
                        cursor-pointer ${fullScreen ? 'fixed top-20 left-3 z-50' : 'hidden'} hover:bg-gray-300
                        flex justify-center items-center dark:bg-dark-main dark:text-white dark:hover:bg-dark-third`}>
                <i className={`bx bx-${fullScreen ? 'exit-' : ''}fullscreen`} ></i>
            </div>
        </>
    )
}