import React from 'react'
import { StoryEditorProvider } from '../../contexts/StoryEditorContext/StoryEditorContext';
import WrapperLogged from '../WrapperLogged';
import CreateStory from './CreateStory';
import StoryEditor from './StoryEditor';

export default function WrapperStory(props) {
    //
    const { mode } = props;
    //
    return (
        <WrapperLogged hideChat={true}>
            <div className="w-full flex z-10 pt-16 h-screen bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full">
                <StoryEditorProvider>
                    {mode === -1 ? <CreateStory mode={mode} /> : <StoryEditor mode={mode} />}
                </StoryEditorProvider>
            </div >
        </WrapperLogged>
    )
}
