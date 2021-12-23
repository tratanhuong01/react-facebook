import React from 'react'
import HeaderSignedOut from '../components/Header/HeaderSignedOut/HeaderSignedOut';
import FooterLogin from '../components/Login/FooterLogin/FooterLogin';
import WrapperPage from './WrapperPage'

export default function WrapperAuthenination(props) {
    //
    const { hideFormLogin, title } = props;
    //
    return (
        <WrapperPage>
            <div className="w-full h-screen">
                <HeaderSignedOut hideFormLogin={hideFormLogin} />
                <div className="w-full bg-gray-200 flex justify-center items-center" style={{ height: 450 }}>
                    <form className="border border-solid border-gray-300 bg-white rounded-lg pt-4 pb-1" style={{ width: "36%" }}>
                        <p className="text-xl pl-5 font-bold mb-3">
                            {title}
                        </p>
                        <hr></hr>
                        {props.children}
                    </form>
                </div>
                <div className="w-3/4 mx-auto">
                    <FooterLogin />
                </div>
            </div>
        </WrapperPage>
    )
}