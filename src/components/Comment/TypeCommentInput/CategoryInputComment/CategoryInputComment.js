import React, { forwardRef, useRef, useState } from 'react'
import { v4 } from 'uuid';
import PopoverEmojii from '../../../Popovers/PopoverEmojii/PopoverEmojii';
import PopoverSticker from '../../../Popovers/PopoverSticker/PopoverSticker';
import PopoversWrapper from '../../../Popovers/PopoversWrapper';

export default forwardRef(function CategoryInputComment(props, ref) {
    //
    const { dataComment, setDataComment, handleSendComment } = props;
    const id = v4();
    let count = 0;
    const [type, setType] = useState(0);
    const refPopover = useRef();
    const handleClick = (type, event) => {
        setType(type);
        const current = event.target;
        if (!current) {
            return;
        }
        refPopover.current.style.display = "block";
        window.addEventListener("click", winEv)
    }
    const winEv = function (event) {
        ++count;
        if (count > 1) {
            if (refPopover.current && !refPopover.current.contains(event.target)) {
                refPopover.current.style.display = "none";
                count = 0;
                window.removeEventListener("click", winEv);
            }
        }
    }
    //
    return (
        <>
            <div className="absolute pr-3 transform -translate-y-1/2 top-1/2 right-0">
                <ul className="flex relative items-center">
                    <li onClick={(event) => handleClick(1, event)} className=" w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                    flex items-center justify-center -ml-1.5">
                        <i className="far fa-smile dark:text-white text-gray-600"></i>
                    </li>
                    {dataComment.type !== 1 && <>
                        <li className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                        flex items-center justify-center -ml-1.5">
                            <input name="fileImage" className='hidden' onChange={(event) => {
                                if (event.target.files.length > 0) {
                                    setDataComment({ ...dataComment, value: event.target.files[0], type: 1 })
                                }
                            }} type="file" accept="image" encType="multipart/form-data" id={id} />
                            <label htmlFor={id}>
                                <i className="fas fa-camera dark:text-white text-gray-600"></i>
                            </label>
                        </li>
                        <li className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                        flex items-center justify-center -ml-1.5">
                            <i className="fas fa-radiation dark:text-white text-gray-600"></i>
                        </li>
                        <li onClick={(event) => handleClick(0, event)} className="w-9 h-9 rounded-full hover:bg-gray-200 dark:hover:bg-dark-second cursor-pointer 
                        flex items-center justify-center -ml-1.5">
                            <i className="far fa-sticky-note dark:text-white text-gray-600"></i>
                        </li>
                    </>}
                </ul>
            </div>
            <PopoversWrapper ref={refPopover}>
                {type === 0 ? <PopoverSticker handleClick={(item) => {
                    count = 0;
                    handleSendComment({ ...dataComment, type: 2, value: item })
                    refPopover.current.style.display = "none";
                }} /> : <PopoverEmojii handleClick={(item) => {
                    function placeCaretAtEnd(el) {
                        el.focus();
                        if (typeof window.getSelection != "undefined"
                            && typeof document.createRange != "undefined") {
                            var range = document.createRange();
                            range.selectNodeContents(el);
                            range.collapse(false);
                            var sel = window.getSelection();
                            sel.removeAllRanges();
                            sel.addRange(range);
                        } else if (typeof document.body.createTextRange != "undefined") {
                            var textRange = document.body.createTextRange();
                            textRange.moveToElementText(el);
                            textRange.collapse(false);
                            textRange.select();
                        }
                    }

                    setDataComment({ ...dataComment, content: dataComment.content + item });
                    ref.current.innerText = dataComment.content + item;
                    placeCaretAtEnd(ref.current);
                }} />}
            </PopoversWrapper>
        </>
    )
})