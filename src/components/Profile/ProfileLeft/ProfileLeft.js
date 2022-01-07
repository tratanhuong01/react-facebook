import React, { memo } from 'react'
import ImageUser from './ImageUser/ImageUser'
import Introduction from './Introduction/Introduction'
import ProfileFriendList from './ProfileFriendList/ProfileFriendList'

export default memo(function ProfileLeft() {
    return (
        <div className="w-full lg:w-5/12">
            <div className="shadow-lv1 bg-white my-2 p-2.5 pt-0 rounded-lg dark:bg-dark-third">
                <Introduction />
            </div>
            <div className="bg-white shadow-lv1 my-2 p-2.5 rounded-lg  dark:bg-dark-third">
                <ImageUser />
            </div>
            <div className="bg-white shadow-lv1 my-2 p-2.5 rounded-lg dark:bg-dark-third"  >
                <ProfileFriendList />
            </div>
        </div>
    )
}
)