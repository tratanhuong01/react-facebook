import React from 'react'
import ImageUser from './ImageUser/ImageUser'
import Introduction from './Introduction/Introduction'
import ProfileFriendList from './ProfileFriendList/ProfileFriendList'

export default function ProfileLeft() {
    return (
        <div className="w-full lg:w-5/12">
            <div className="mt-2.5 shadow-lv1 bg-white p-2.5 pt-0 rounded-lg dark:bg-dark-third" style={{ width: "95%" }}>
                <Introduction />
            </div>
            <div className="pl-2.5 bg-white shadow-lv1 my-2.5 rounded-lg  dark:bg-dark-third" style={{ width: "95%" }}>
                <ImageUser />
            </div>
            <div className="pl-2.5 bg-white shadow-lv1 my-2.5 rounded-lg dark:bg-dark-third" style={{ width: "95%" }} >
                <ProfileFriendList />
            </div>
        </div>
    )
}
