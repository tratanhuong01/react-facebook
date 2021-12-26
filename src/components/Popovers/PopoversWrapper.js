import React from "react";
import { useRef } from "react";
import useOutSideClick from "../../hooks/useOutSideClick";

export default function PopoversWrapper(props) {
    //
    const refContain = useRef();
    const { modals } = useOutSideClick(refContain);
    const { className, children } = props;
    //
    return (
        modals.popover && <div ref={refContain} className={className}>
            {children}
        </div>
    )
}
