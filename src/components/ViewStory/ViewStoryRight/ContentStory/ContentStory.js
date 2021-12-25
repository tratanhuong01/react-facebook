import React, { memo, useContext, useEffect, useRef } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import allFeel from "../../../../config/feels"
import stories from '../../../../config/stories';
import { StoryContext } from '../../../../contexts/StoryContext/StoryContext';
import InfoStory from '../InfoStory/InfoStory';
import HeaderStoryView from './HeaderStoryView/HeaderStoryView';


const ContentStory = () => {
    //
    const { stories: { timeCurrent, current, isPlaying, indexRun, show, main, indexStory }, storiesDispatch, storiesAction } = useContext(StoryContext);
    const refAudio = useRef();
    useEffect(() => {
    }, [])
    useEffect(() => {
        //
        let timeOut
        if (isPlaying) {
            timeOut = setTimeout(() => {
                if (timeCurrent + 1 > 10) {
                    storiesDispatch(storiesAction.updateData('timeCurrent', 0));
                    if (indexRun + 1 === current.imageList.length) {
                        storiesDispatch(storiesAction.updateData('indexRun', 0));
                        if (indexStory + 1 === stories.length) {
                            storiesDispatch(storiesAction.updateData('indexStory', 0));
                            storiesDispatch(storiesAction.updateData('indexRun', 0));
                            storiesDispatch(storiesAction.updateData('main', stories[0].imageList[0]));
                            storiesDispatch(storiesAction.updateData('current', stories[0]));
                        }
                        else {
                            storiesDispatch(storiesAction.updateData('indexRun', 0));
                            storiesDispatch(storiesAction.updateData('indexStory', indexStory + 1));
                            storiesDispatch(storiesAction.updateData('current', stories[indexStory + 1]));
                            storiesDispatch(storiesAction.updateData('main', stories[indexStory + 1].imageList[0]));
                        }
                    }
                    else {
                        storiesDispatch(storiesAction.updateData('indexRun', indexRun + 1));
                        storiesDispatch(storiesAction.updateData('main', current.imageList[indexRun + 1]));
                    }
                }
                else {
                    storiesDispatch(storiesAction.updateData('timeCurrent', timeCurrent + 1));
                }
            }, 1000);
        }
        else {
            refAudio.current.pause();
            clearTimeout(timeOut);
        }
        return () => {
            clearTimeout(timeOut);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [main, timeCurrent, isPlaying, current]);
    //
    return (
        <div className="w-7/12 story-right bg-gray-400 dark:bg-dark-third mt-5 relative m-2 rounded-lg relative"
            style={{ height: "calc(100% - 90px)" }}>
            <audio src={main.music} ref={refAudio} className='hidden' autoPlay />
            <div className='w-full h-full flex items-center'>
                <img src={main.src}
                    className="w-full img-story object-cover" alt="" style={{ maxHeight: "calc(100%)" }} />
            </div>
            <HeaderStoryView refAudio={refAudio} />
            <ScrollContainer className="hidden w-full p-2 absolute bottom-2 flex max-w-full overflow-x-auto">
                <div className="w-10/12 relative flex-shrink-0 flex items-center">
                    <input type="text" name="" id="" placeholder="Trả lời.."
                        className="w-full p-2 rounded-3xl bg-black bg-opacity-50 text-white" />
                    <i
                        className="far fa-paper-plane cursor-pointer absolute right-4 top-0.5 text-2xl 
                        text-gray-200"></i>
                </div>
                <div className='flex gap-2 items-center ml-3'>
                    {allFeel.map((feel, index) =>
                        <img src={feel.image} key={index} className='w-8 flex-shrink-0 flex h-8 rounded-full cursor-pointer'
                            alt='' />)}
                </div>
            </ScrollContainer>
            {!show && <div onClick={() => storiesDispatch(storiesAction.updateData('show', true))} className='absolute -bottom-12 cursor-pointer left-2 p-2 z-50'>
                <div className='mb-7 -ml-2  border-b-2 border-gray-200 border-solid'>
                    <i className='bx bx-chevron-left transform text-white rotate-90 mb-0 text-2xl' ></i>
                    <br></br>
                    <span className='text-white font-semibold mt-2'>4 người xem</span>
                </div>
                <div className='flex pl-2'>
                    <img src='https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png'
                        alt='' className='w-7 h-7 rounded-full -ml-2 z-30 object-cover border-white border-2 
                        border-solid' />
                    <img src='http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg'
                        alt='' className='w-7 h-7 rounded-full -ml-2 z-20 object-cover border-white border-2 
                        border-solid' />
                    <img src='https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png'
                        alt='' className='w-7 h-7 rounded-full -ml-2 z-10 object-cover border-white border-2 
                        border-solid' />
                </div>
            </div>}
            <div className="w-1/4 bg-white flex p-1.5 absolute top-1/2 left-16 rounded-lg"
                style={{ transform: "rotate(-25deg)" }}>
                <div className="w-1/4 pr-2">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1639970050/Story/pxhxin9ywl1ii7u7qped.png"
                        alt="" />
                </div>
                <div className="w-3/4">
                    <p className="font-bold" style={{ fontSize: 7 }}>បទកំពុងល្បី 24kgoldn - Mood</p>
                    <p className="font-sm" style={{ fontSize: 5 }}>24kgoldn</p>
                </div>
            </div>
            {show && <InfoStory setShow={(status) => storiesDispatch(storiesAction.updateData('show', status))} />}
        </div>
    )
}
export default memo(ContentStory);
