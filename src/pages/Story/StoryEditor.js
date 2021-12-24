import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import AudioList from '../../components/StoryEditor/AudioList/AudioList'
import ColorTextList from '../../components/StoryEditor/ColorTextList/ColorTextList'
import ContentStoryEditor from '../../components/StoryEditor/ContentStoryEditor/ContentStoryEditor'
import StoryEditLeft from '../../components/StoryEditor/StoryEditLeft/StoryEditLeft'
import backgroundStory from '../../config/backgroundStory'
import { PAGE_CREATE_STORY } from '../../constants/Config'
import { StoryEditorContext } from '../../contexts/StoryEditorContext/StoryEditorContext'

export default function StoryEditor(props) {
    //
    const { mode } = props;
    const navigation = useNavigate();
    const { storyEditor: { data }, storyEditorsDispatch, storyEditorsAction } = useContext(StoryEditorContext);
    useEffect(() => {
        //
        if (mode === 1) {
            if (!data) {
                navigation(PAGE_CREATE_STORY);
            }
        }
        else {
            storyEditorsDispatch(storyEditorsAction.updateData('data', backgroundStory[0]));
        }
        storyEditorsDispatch(storyEditorsAction.updateData('mode', mode));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode])
    //
    return (
        <form action="" method="post" id="formCreatePicture"
            className="w-full flex">
            <textarea name="dataURI" id="dataURI" cols="30" rows="10" className="hidden"></textarea>
            <StoryEditLeft />
            <div className="w-2/4 bg-gray-200 dark:bg-dark-main story-right shadow-3xl">
                <ContentStoryEditor />
                <div className="w-full my-6 pl-9">
                    <span onClick={() => navigation(PAGE_CREATE_STORY)} className="text-center font-bold w-48per mr-4 py-3 bg-gray-300 rounded-lg cursor-pointer"
                        type="button">Bỏ</span>
                    <ButtonComponent type="button" className="font-bold w-1/2 bg-1877F2 py-3 rounded-lg 
                            text-white">Chia sẻ lên tin</ButtonComponent>
                </div>
            </div >
            <div className="w-1/4 p-4 pt-0 border-t-2 border-solid border-gray-300 shadow-md 
                    dark:border-dark-third">
                <p className="w-full flex py-6">
                    <span className="font-bold text-xl dark:text-white">Màu chữ</span>
                </p>
                <ColorTextList />
                <p className="w-full flex py-6">
                    <span className="font-bold text-xl dark:text-white">Âm nhạc</span>
                </p>
                <AudioList />
            </div>
            <input type="file" className="hidden" name="myPictueStory" id="createStoryImage" />
        </form >
    )
}
