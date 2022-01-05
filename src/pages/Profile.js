import React, { useContext, useEffect, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import FriendCanKnow from '../components/FriendCanKnow/FriendCanKnow'
import CategoryProfile from '../components/Profile/CategoryProfile/CategoryProfile'
import HeaderProfile from '../components/Profile/HeaderProfile/HeaderProfile'
import InviteProfile from '../components/Profile/InviteProfile/InviteProfile'
import PostProfileList from '../components/Profile/PostProfileList/PostProfileList'
import ProfileLeft from '../components/Profile/ProfileLeft/ProfileLeft'
import WritePost from '../components/WritePost/WritePost'
import { UserProfileContext, UserProfileProvider } from '../contexts/UserProfileContext/UserProfileContext'
import NotFound from './NotFound'
import WrapperLogged from './WrapperLogged'

const MainProfile = (props) => {
    //
    const { id, refContainer } = props;
    const location = useLocation();
    const { userProfile: { userProfile }, userProfilesDispatch, userProfilesAction } = useContext(UserProfileContext);
    useEffect(() => {
        //
        if (refContainer.current) {
            refContainer.current.scrollTo(0, 0);
        }
        userProfilesDispatch(userProfilesAction.loadUserProfileRequest(userProfilesDispatch, userProfilesAction, id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, refContainer])
    //
    return (
        userProfile === "" ? <NotFound /> :
            userProfile === null ? "Loading" : props.children
    )
}

export default function Profile(props) {
    //
    const { id } = useParams();
    const refContainer = useRef();
    //
    return (
        <WrapperLogged>
            <UserProfileProvider>
                <MainProfile refContainer={refContainer} id={id}>
                    <div ref={refContainer} className='w-full h-screen pl-0.5 md:pl-0 overflow-y-auto overflow-x-hidden'>
                        <div className="w-full bg-white dark:bg-dark-second">
                            <HeaderProfile />
                            <div className="dark:bg-dark-second w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                                <CategoryProfile />
                                <InviteProfile />
                            </div>
                        </div>
                        {id === "oke" && <div className='w-full bg-white dark:bg-dark-main'>
                            <div className="dark:bg-dark-main bg-gray-100 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                                <div className='w-full py-2'>
                                    <FriendCanKnow />
                                </div>
                            </div>
                        </div>}
                        <div className="w-full relative bg-gray-100 dark:bg-dark-main pt-3">
                            <div className="mx-auto relative w-full lg:flex xl:w-63% md:w-4/5 lg:w-3/4 md:mx-auto 
                            lg:flex-wrap rounded-lg">
                                <div className="w-full lg:flex gap-3" >
                                    <ProfileLeft />
                                    <div className="w-full mx-auto rounded-lg lg:w-7/12">
                                        <WritePost />
                                        <PostProfileList />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </MainProfile>
            </UserProfileProvider>
        </WrapperLogged >
    )
}

