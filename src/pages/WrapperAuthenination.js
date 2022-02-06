import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderSignedOut from '../components/Header/HeaderSignedOut/HeaderSignedOut';
import FooterLogin from '../components/Login/FooterLogin/FooterLogin';
import { PAGE_HOME } from '../constants/Config';
import WrapperPage from './WrapperPage'

export default function WrapperAuthenination(props) {
    //
    const { hideFormLogin, title, notFound } = props;
    const user = useSelector((state) => state.user);
    const navigation = useNavigate();
    useEffect(() => {
        //
        if (user) {
            navigation(PAGE_HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    //
    return (
        <WrapperPage login={true}>
            <div className={`w-full h-screen ${notFound ? 'overflow-hidden' : ''}`}>
                <HeaderSignedOut hideFormLogin={hideFormLogin} />
                {notFound ? props.children :
                    <div className="w-full bg-gray-200 flex justify-center items-center" style={{ height: 450 }}>
                        <div className="border border-solid border-gray-300 bg-white rounded-lg pt-4 pb-1" style={{ width: "36%" }}>
                            <p className="text-xl pl-5 font-bold mb-3">
                                {title}
                            </p>
                            <hr></hr>
                            {props.children}
                        </div>
                    </div>}

                <div className="w-3/4 mx-auto">
                    <FooterLogin />
                </div>
            </div>
        </WrapperPage>
    )
}
