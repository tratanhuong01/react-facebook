import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../../../api/api';
import ButtonComponent from '../../../../ButtonComponent/ButtonComponent'
import * as usersAction from "../../../../../actions/user/index";

export default function DescriptionIntroduction({ user, userProfile }) {
    //
    const headers = useSelector(state => state.headers);
    const refContainer = useRef();
    const refDescription = useRef();
    const refAbsolute = useRef();
    const [description, setDescription] = useState(JSON.parse(userProfile.description));
    const [loading, setLoading] = useState();
    const [show, setShow] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        //
        if (refDescription && refDescription.current) {
            setDescription(JSON.parse(userProfile.description));
            refDescription.current.innerText = description.introduction;
            refDescription.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refDescription, userProfile])
    useEffect(() => {
        //
        refAbsolute.current.style.height = refContainer.current.offsetHeight + "px";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])
    //
    return (
        <div ref={refContainer} className='w-full relative'>
            <div className='w-full' style={{ display: show ? 'block' : 'none' }}>
                <div ref={refDescription} className='w-full px-3 flex break-all contentedittable text-center justify-center items-center resize-none rounded-lg bg-gray-300 h-20'
                    contentEditable={true} suppressContentEditableWarning={true} placeholder="Mo ta.."
                    onInput={(event) => {
                        if (event.currentTarget.textContent.length <= 70) {
                            setDescription({ ...description, introduction: event.currentTarget.textContent })
                        }
                    }} spellCheck={false}></div>
                <p className='mt-1 text-right text-gray-500 text-sm'>{`Còn ${70 - description.introduction.length} ký tự`}</p>
                <div className='text-right w-full my-1 pb-2 '>
                    <ButtonComponent handleClick={() => {
                        setShow();
                        setDescription(JSON.parse(user.description));
                    }} className={`px-4 py-1.5 rounded-lg bg-gray-300`}>
                        Huỷ
                    </ButtonComponent>
                    <ButtonComponent handleClick={async () => {
                        setLoading(true);
                        const result = await api(`users`, 'PUT', { ...user, description: JSON.stringify({ ...description }) }, headers);
                        dispatch(usersAction.loginUser(result.data));
                        setLoading(false);
                        setShow();
                    }} disabled={JSON.parse(user.description).introduction === description.introduction}
                        className={`px-4 py-1.5 ml-3 rounded-lg bg-main text-white`}>
                        Lưu
                    </ButtonComponent>
                </div>
            </div>
            {!show && <>
                <p className='mb-3 text-center'>
                    {description.introduction}
                </p>
                {user.id === userProfile.id && <ButtonComponent
                    handleClick={() => {
                        setLoading(true);
                        setShow(true);
                        setLoading(false);
                    }}
                    className='w-full p-2 text-sm bg-gray-200 hover:bg-gray-300 font-semibold 
                    rounded-lg dark:bg-dark-second dark:text-white'>
                    Chỉnh sửa tiểu sử
                </ButtonComponent>}
            </>}
            <div ref={refAbsolute} className='w-full absolute top-0 left-0 items-center 
            justify-center bg-white dark:bg-dark-second bg-opacity-50 z-10'
                style={{ display: loading ? 'flex' : 'none' }}>
                <i className="fas fa-spinner fa-spin text-2xl"></i>
            </div>
        </div>
    )
}
