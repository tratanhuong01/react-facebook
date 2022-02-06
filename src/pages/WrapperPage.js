import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ModalContext } from '../contexts/ModalContext/ModalContext'
import * as usersAction from "../actions/user/index";
import { PAGE_LOGIN } from '../constants/Config';
import { useNavigate } from 'react-router-dom';
import 'moment/locale/vi';

export default function WrapperPage(props) {
    //
    const { white, login } = props;
    const { modals, modalsDispatch, modalsAction } = useContext(ModalContext);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const ref = useRef();
    const navigation = useNavigate();
    useEffect(() => {
        //
        if (modals.data) {
            document.getElementsByTagName('body')[0].classList = "overflow-hidden";
        }
        else {
            document.getElementsByTagName('body')[0].classList = "";
        }

        if (localStorage && localStorage.getItem("user")) {
            if (!user) {
                if (ref.current) {
                    ref.current.classList = "";
                }
                dispatch(usersAction.loginUserRequest(null, navigation));
            }
        }
        else {
            if (!login || user === false)
                navigation(PAGE_LOGIN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modals.data, user]);
    useEffect(() => {
        //
        modalsDispatch(modalsAction.closeModal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <div className='' id='main__logged' ref={ref}>
            {props.children}
            <div className={`w-full h-screen fixed top-0 left-0 bg-${white ? 'white' : 'black'} bg-opacity-50 
            z-50 ${modals.data ? '' : 'hidden'}`}>
                {modals.data}
            </div>
        </div>
    )
}
