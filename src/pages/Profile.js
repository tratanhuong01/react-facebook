import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import FriendCanKnow from '../components/FriendCanKnow/FriendCanKnow'
import CategoryProfile from '../components/Profile/CategoryProfile/CategoryProfile'
import HeaderProfile from '../components/Profile/HeaderProfile/HeaderProfile'
import InviteProfile from '../components/Profile/InviteProfile/InviteProfile'
import LoadingProfile from '../components/Profile/LoadingProfile'
import { PAGE_PROFILE } from '../constants/Config'
import { UserProfileContext, UserProfileProvider } from '../contexts/UserProfileContext/UserProfileContext'
import routes from '../routes/profileRoutes'
import NotFound from './NotFound'
import WrapperLogged from './WrapperLogged'

const WrapperProfile = forwardRef((props, ref) => {
    //
    const { id, loading, setLoading } = props;
    const location = useLocation();
    const { userProfile: { userProfile }, userProfilesDispatch, userProfilesAction } = useContext(UserProfileContext);
    const refPath = useRef();
    useEffect(() => {
        //
        let timeOut;
        if (id !== refPath.current) {
            setLoading(true);
            userProfilesDispatch(userProfilesAction.loadUserProfileRequest(userProfilesDispatch, userProfilesAction, id));
            timeOut = setTimeout(() => {
                setLoading(false);
                ref.current.scrollTo(0, 0);
            }, 1200);
        }
        refPath.current = id;
        return () => {
            clearTimeout(timeOut);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, ref, id, refPath])
    //
    return (
        userProfile === "" ? <NotFound /> :
            <>
                {userProfile && props.children}
                {loading && <LoadingProfile />}
            </>
    )
})

export default function Profile(props) {
    //
    const { id } = useParams();
    const location = useLocation();
    const refContainer = useRef();
    const [loading, setLoading] = useState(true);
    //
    return (
        <WrapperLogged>
            <UserProfileProvider>
                <WrapperProfile ref={refContainer} id={id} setLoading={setLoading} loading={loading}>
                    <div ref={refContainer} className='w-full h-screen pl-0.5 md:pl-0 overflow-y-auto overflow-x-hidden'
                        style={{ display: loading ? 'none' : 'block' }}>
                        <div className="w-full bg-white dark:bg-dark-second">
                            <HeaderProfile />
                            <div className="dark:bg-dark-second w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                                <CategoryProfile id={id} />
                                <InviteProfile />
                            </div>
                        </div>
                        {location.pathname === PAGE_PROFILE + "/" + id &&
                            <div className='w-full bg-white dark:bg-dark-main'>
                                <div className="dark:bg-dark-main bg-gray-100 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
                                    <div className='w-full py-2'>
                                        <FriendCanKnow />
                                    </div>
                                </div>
                            </div>}
                        <div className="w-full relative bg-gray-100 dark:bg-dark-main pt-3">
                            <div className="mx-auto relative w-full lg:flex xl:w-63% md:w-4/5 lg:w-3/4 md:mx-auto 
                            lg:flex-wrap rounded-lg">
                                <Routes>
                                    {routes.map((route, index) =>
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            element={route.element}
                                        />)}
                                </Routes>
                            </div>
                        </div>
                    </div>
                </WrapperProfile>
            </UserProfileProvider>
        </WrapperLogged >
    )
}

