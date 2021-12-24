import React from 'react'
import FriendCanKnow from '../components/FriendCanKnow/FriendCanKnow'
import ItemPost from '../components/ItemPost/ItemPost'
import CategoryProfile from '../components/Profile/CategoryProfile/CategoryProfile'
import HeaderProfile from '../components/Profile/HeaderProfile/HeaderProfile'
import InviteProfile from '../components/Profile/InviteProfile/InviteProfile'
import ProfileLeft from '../components/Profile/ProfileLeft/ProfileLeft'
import WritePost from '../components/WritePost/WritePost'
import WrapperLogged from './WrapperLogged'

export default function Profile() {
    return (
        <WrapperLogged>
            <div className="w-full bg-white dark:bg-dark-second">
                <div className="dark:bg-dark-second pt-10 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                    <div className="w-full border-b-2 border-solid border-gray-300 relative">
                        <HeaderProfile />
                    </div>
                    <CategoryProfile />
                    <InviteProfile />
                </div>
            </div>
            <div className='w-full bg-white dark:bg-dark-main'>
                <div className="dark:bg-dark-main bg-gray-100 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                    <div className='w-full py-2'>
                        <FriendCanKnow />
                    </div>
                </div>
            </div>
            <div className="w-full relative bg-gray-100 dark:bg-dark-main pt-3">
                <div className="mx-auto relative w-full lg:flex xl:w-63% md:w-4/5 lg:w-3/4 md:mx-auto lg:flex-wrap rounded-lg">
                    <div className="w-full lg:flex" >
                        <ProfileLeft />
                        <div className="w-full mx-auto rounded-lg lg:w-7/12">
                            <WritePost />
                            <div className='w-full my-2'>
                                <ItemPost />
                                <ItemPost />
                                <ItemPost />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </WrapperLogged >
    )
}
