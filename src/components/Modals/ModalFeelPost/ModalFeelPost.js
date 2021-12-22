import React, { useContext, useEffect, useState } from 'react'
import feelActivityList from '../../../config/feelActivityList';
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import InputComponent from '../../InputComponent/InputComponent'
import ModalWrapperChildPost from '../ModalWrapperChildPost/ModalWrapperChildPost'
import ActivityPost from './ActivityPost/ActivityPost';
import FeelPost from './FeelPost/FeelPost';

export default function ModalFeelPost() {
    //
    const { posts } = useContext(ModalContext);
    const [type, setType] = useState(posts.activity ? 1 : 0);
    const [loading, setLoading] = useState(true);
    const [activity, setActivity] = useState();
    useEffect(() => {
        let timeOut;
        if (loading) {
            timeOut = setTimeout(() => {
                setLoading(false);
            }, 500)
        }
        return () => {
            clearTimeout(timeOut);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
    //
    return (
        <ModalWrapperChildPost title="Bạn cảm thấy như thế nào?">
            <ul className='mt-2 mb-4 flex gap-3 text-gray-600'>
                <li onClick={() => {
                    setType(0);
                    setLoading(true);
                }} className={`${type === 0 ? 'border-b-4 border-main text-main' : 'border-white dark:border-dark-third'} 
                 p-3 border-solid font-semibold cursor-pointer`}>Cảm xúc</li>
                <li onClick={() => {
                    setType(1);
                    setLoading(true);
                }} className={`${type === 1 ? 'border-b-4 border-main text-main' : 'border-white dark:border-dark-third'} 
                 p-3 border-solid font-semibold cursor-pointer`}>Hoạt động</li>
            </ul>
            <div class="w-full my-2 px-2">
                {activity ? <div className='w-full flex items-center'>
                    <div className='w-1/3 text-sm bg-blue-100 text-blue-500 font-semibold relative rounded-lg mr-2 flex items-center'>
                        <span className='p-2'>{activity.label}</span>
                        <span onClick={() => setActivity()} className='absolute top-1/2 transform  -translate-y-1/2 -mt-0.5 right-2
                        cursor-pointer font-semibold text-2xl'>&times;</span>
                    </div>
                    <InputComponent className="dark:text-white w-full py-2 px-4 border border-gray-300 bg-transparent 
                    dark:bg-dark-third rounded-3xl" type="text" placeholder="Tìm kiếm" search={true} width={"w-2/3 ml-2"} />
                </div> :
                    <InputComponent className="dark:text-white w-full p-2.5 border border-gray-300 
                    pl-4 bg-transparent dark:bg-dark-third rounded-3xl" type="text" placeholder="Tìm kiếm"
                        search={true} />}
            </div>
            <div className="w-full h-80 overflow-x-hidden overflow-y-auto max-h-80 wrapper-content-right">
                {loading ? <div className=' w-full py-3 text-center h-full'>
                    <i className="fas fa-circle-notch fa-spin text-gray-500 text-xl"></i>
                </div> :
                    type === 0 ? <FeelPost feels={feelActivityList.feels} /> :
                        <ActivityPost activities={feelActivityList.activities} activity={
                            activity
                        }
                            setActivity={setActivity} />
                }
            </div>
        </ModalWrapperChildPost>
    )
}
