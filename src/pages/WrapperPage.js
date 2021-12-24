import React, { useContext, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { ModalContext } from '../contexts/ModalContext/ModalContext'

export default function WrapperPage(props) {
    //
    const { white } = props;
    const { modals } = useContext(ModalContext);
    const user = useSelector((state) => state.user);
    const ref = useRef();
    useEffect(() => {
        //
        if (modals.data) {
            document.getElementsByTagName('body')[0].classList = "overflow-hidden";
        }
        else {
            document.getElementsByTagName('body')[0].classList = "";
        }
        if (!user) {
            if (ref.current) {
                ref.current.classList = "";
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modals.data, user]);
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
