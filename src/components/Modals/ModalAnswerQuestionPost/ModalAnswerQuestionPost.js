import React, { useContext, useState } from 'react'
import answerQuestion from '../../../config/answerQuestion';
import { PostContext } from '../../../contexts/PostContext/PostContext';
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import ModalWrapperChildPost from '../ModalWrapperChildPost/ModalWrapperChildPost'
import ContentAnswerQuestion from './ContentAnswerQuestion/ContentAnswerQuestion';

export default function ModalAnswerQuestionPost() {
    //
    const { postsDispatch, postsAction } = useContext(PostContext);
    const [current, setCurrent] = useState(answerQuestion[0]);
    const [input, setInput] = useState("");
    //
    return (
        <ModalWrapperChildPost customerClass={`shadow-sm border border-solid border-gray-200 bg-white w-full absolute  
        dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-2 sm:w-10/12 md:w-2/3 lg:w-2/3 
        xl:w-1/3 shadow-lv1 z-50 top-1/2 left-1/2 `} title={'Tổ chức buổi H&Đ'} >
            <div className='w-full px-5 pb-2 pt-10'>
                <ContentAnswerQuestion edit={true} setCurrent={setCurrent} current={current} input={input} setInput={setInput} />
                <ButtonComponent handleClick={() => {
                    postsDispatch(postsAction.updateData('answerQuestion', current))
                    postsDispatch(postsAction.updateData('contentAnswerQuestion', input))
                    postsDispatch(postsAction.returnModalPost());
                }} className='w-full font-bold p-2 mt-4 rounded-lg bg-gray-200 hover:bg-gray-300'>
                    Tiếp
                </ButtonComponent>
            </div>
        </ModalWrapperChildPost >
    )
}
