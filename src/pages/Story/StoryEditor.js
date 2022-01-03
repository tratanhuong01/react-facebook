import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import AudioList from '../../components/StoryEditor/AudioList/AudioList'
import ColorTextList from '../../components/StoryEditor/ColorTextList/ColorTextList'
import ContentStoryEditor from '../../components/StoryEditor/ContentStoryEditor/ContentStoryEditor'
import StoryEditLeft from '../../components/StoryEditor/StoryEditLeft/StoryEditLeft'
import backgroundStory from '../../config/backgroundStory'
import { PAGE_CREATE_STORY, PAGE_HOME } from '../../constants/Config'
import { StoryEditorContext } from '../../contexts/StoryEditorContext/StoryEditorContext'
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux'
import api from '../../api/api'

export default function StoryEditor(props) {
    //
    const { mode } = props;
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const [loading, setLoading] = useState(false);
    const navigation = useNavigate();
    const { storyEditor: { data, audio }, storyEditorsDispatch, storyEditorsAction } = useContext(StoryEditorContext);
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
    const refImage = useRef();
    const handleCreateStory = async () => {
        if (refImage.current) {
            setLoading(true)
            let groupStory = await api(`groupStories/check?idUser=${user.id}`, 'GET', null, headers);
            html2canvas(refImage.current).then(async (canvas) => {
                var image = canvas
                    .toDataURL("image/png"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
                const formData = new FormData();
                formData.append("base64", image);
                formData.append("id", new Date().getTime());
                formData.append("publicId", "Stories/");
                formData.append("typeFile", "image");
                const imageUpload = await api(`uploadBase64`, 'POST', formData, headers);
                if (groupStory.data.length === 0) {
                    groupStory = await api(`groupStories`, 'POST', {
                        id: null,
                        userGroupStory: user,
                        timeCreated: null
                    }, headers);
                }
                await api(`stories`, 'POST', {
                    id: null,
                    groupStory: groupStory.data.length > 0 ? groupStory.data[0] : groupStory.data,
                    music: audio ? JSON.stringify(audio) : null,
                    src: imageUpload.data.url,
                    typeStory: mode,
                    timeCreated: null
                }, { ...headers, "Content-Typ": "application/json" })
                navigation(PAGE_HOME);
            });
        }
    }
    //
    return (
        <form action="" method="post" id="formCreatePicture"
            className="w-full flex">
            <textarea name="dataURI" id="dataURI" cols="30" rows="10" className="hidden"></textarea>
            <StoryEditLeft />
            <div className="w-2/4 bg-gray-200 dark:bg-dark-main story-right shadow-3xl">
                <ContentStoryEditor ref={refImage} />
                <div className="w-full my-6 pl-9">
                    <span onClick={() => navigation(PAGE_CREATE_STORY)} className="text-center font-bold w-48per mr-4 py-3 bg-gray-300 rounded-lg cursor-pointer"
                        type="button">Bỏ</span>
                    <ButtonComponent disabled={loading} handleClick={handleCreateStory} type="button" className="font-bold w-1/2 bg-1877F2 py-3 rounded-lg 
                            text-white">{loading ? <i className='bx bx-shape-circle fa-spin text-main text-5xl'>:
                        </i> : 'Chia sẻ lên tin'}</ButtonComponent>
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
