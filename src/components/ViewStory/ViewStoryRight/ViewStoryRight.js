import React, { useContext } from 'react'
import ContentStory from './ContentStory/ContentStory'
import { StoryContext } from '../../../contexts/StoryContext/StoryContext';

export default function ViewStoryRight(props) {
    //
    const { fullScreen } = props;
    const { stories: { indexRun, current, main, indexStory, storyList }, storiesDispatch, storiesAction } = useContext(StoryContext);
    const processUp = () => {
        storiesDispatch(storiesAction.updateData('timeCurrent', 0));
        if (indexRun + 1 === current.storyList.length) {
            if (indexStory + 1 === storyList.length) {
                storiesDispatch(storiesAction.updateData('indexStory', 0));
                storiesDispatch(storiesAction.updateData('indexRun', 0));
                storiesDispatch(storiesAction.updateData('main', storyList[0].storyList[0]));
                storiesDispatch(storiesAction.updateData('current', storyList[0]));
            }
            else {
                storiesDispatch(storiesAction.updateData('indexRun', 0));
                storiesDispatch(storiesAction.updateData('indexStory', indexStory + 1));
                storiesDispatch(storiesAction.updateData('current', storyList[indexStory + 1]));
                storiesDispatch(storiesAction.updateData('main', storyList[indexStory + 1].storyList[0]));
            }
        }
        else {
            storiesDispatch(storiesAction.updateData('indexRun', indexRun + 1));
            storiesDispatch(storiesAction.updateData('main', current.storyList[indexRun + 1]));
        }
    }
    const processDown = () => {
        storiesDispatch(storiesAction.updateData('timeCurrent', 0));
        if (indexStory - 1 < 0) {
            if (indexRun - 1 >= 0) {
                storiesDispatch(storiesAction.updateData('indexRun', indexRun - 1));
                storiesDispatch(storiesAction.updateData('main', storyList[indexStory].storyList[indexRun - 1]));
            }
            else {
                storiesDispatch(storiesAction.updateData('indexStory', storyList.length - 1));
                storiesDispatch(storiesAction.updateData('indexRun', storyList[storyList.length - 1].storyList.length - 1));
                storiesDispatch(storiesAction.updateData('main', storyList[storyList.length - 1].storyList[storyList[storyList.length - 1].storyList.length - 1]));
                storiesDispatch(storiesAction.updateData('current', storyList[storyList.length - 1]));
            }
        }
        else {
            if (indexRun - 1 >= 0) {
                storiesDispatch(storiesAction.updateData('indexRun', indexRun - 1));
                storiesDispatch(storiesAction.updateData('main', storyList[indexStory].storyList[indexRun - 1]));
            }
            else {
                storiesDispatch(storiesAction.updateData('indexStory', indexStory - 1));
                storiesDispatch(storiesAction.updateData('indexRun', storyList[indexStory - 1].storyList.length - 1));
                storiesDispatch(storiesAction.updateData('main', storyList[indexStory - 1].storyList[storyList[indexStory - 1].storyList.length - 1]));
                storiesDispatch(storiesAction.updateData('current', storyList[indexStory - 1]));
            }
        }
    }
    //
    return (
        <div className={`${fullScreen ? 'w-full' : 'w-3/4'} bg-black dark:bg-dark-main story-right`}
            style={{ height: "calc(100%)" }}>
            <div className="w-full flex overflow-y-auto h-full" >
                <div className={`${fullScreen ? 'w-1/2' : 'w-2/3'} px-5 mx-auto h-full relative top-2 left-20 flex`}>
                    {indexStory === 0 && indexRun === 0 ? <div className='w-1/12 pr-4'></div> :
                        <div onClick={() => processDown()} className="w-1/12 pr-4 flex items-center justify-center h-full">
                            <i className="fas fa-chevron-left cursor-pointer text-gray-500 px-5 py-3 bg-gray-300 rounded-full 
                            hover:text-black hover:bg-white text-xl "></i>
                        </div>}
                    {current && main && <ContentStory />}
                    {indexStory === storyList.length - 1
                        && indexRun === storyList[storyList.length - 1].storyList.length - 1
                        ? <div className='w-1/12 pl-4'></div> : <div onClick={() => processUp()} className="w-1/12 pl-4 flex items-center justify-center h-full">
                            <i className="fas fa-chevron-right cursor-pointer text-gray-500 px-5 py-3 bg-gray-300 rounded-full 
                            hover:text-black hover:bg-white text-xl " ></i>
                        </div>}
                </div>
            </div >
        </div >
    )
}
