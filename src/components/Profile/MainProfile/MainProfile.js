import React from 'react'
import WritePost from '../../WritePost/WritePost'
import PostProfileList from '../PostProfileList/PostProfileList'
import ProfileLeft from '../ProfileLeft/ProfileLeft'

export default function MainProfile() {
    return (
        <div className="w-full lg:flex gap-3" >
            <ProfileLeft />
            <div className="w-full mx-auto rounded-lg lg:w-7/12">
                <WritePost />
                <PostProfileList />
            </div>
        </div>
    )
}
