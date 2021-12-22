import React, { useContext, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalContext/ModalContext'

export default function WrapperPage(props) {
    //
    const { white } = props;
    const { modals } = useContext(ModalContext);
    useEffect(() => {
        //
        if (modals.data) {
            document.getElementsByTagName('body')[0].classList = "overflow-hidden";
        }
        else {
            document.getElementsByTagName('body')[0].classList = "";
        }
        //
    }, [modals.data]);
    //
    return (
        <>
            {props.children}
            <div className={`w-full h-screen fixed top-0 left-0 bg-${white ? 'white' : 'black'} bg-opacity-50 
            z-50 ${modals.data ? '' : 'hidden'}`}>
                {modals.data}
            </div>
        </>
    )
}
