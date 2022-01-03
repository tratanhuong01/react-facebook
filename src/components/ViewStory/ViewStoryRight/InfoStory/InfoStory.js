import React, { useContext } from 'react'
import { StoryContext } from '../../../../contexts/StoryContext/StoryContext';

export default function InfoStory(props) {
    //
    const { setShow } = props;
    const { stories: { current, main }, storiesDispatch, storiesAction } = useContext(StoryContext);
    //
    return (
        <div className="w-full absolute bg-gray-100 dark:bg-dark-second px-2 bottom-0 left-0 rounded-lg"
            style={{ height: "86.5%" }}>
            <p className="dark:text-white font-bold py-4 w-full relative">
                Chi tiết về tin
                <span onClick={() => setShow(false)} className='text-2xl cursor-pointer font-bold absolute top-2 right-2'>
                    &times;</span>
            </p>
            <ul className="flex overflow-x-hidden" style={{ maxWidth: 368 }}>
                {current.storyList.map((item, index) =>
                    <li onClick={() => {
                        storiesDispatch(storiesAction.updateData('indexRun', index));
                        storiesDispatch(storiesAction.updateData('main', current.storyList[index]));
                    }} key={index} className="mr-2 cursor-pointer flex-shrink-0 flex items-center justify-center "
                        style={{ width: 120, height: 160 }}>
                        <img className={`${item.id === main.id ? 'w-full h-full' : 'w-5/6 h-5/6'} object-cover`} alt=''
                            src={item.src} />
                    </li>
                )}
                <li className="cursor-pointer flex-shrink-0 " style={{ width: 120 }}>
                    <div className="w-32 h-40 p-2">
                        <div className="w-full dark:bg-dark-third bg-gray-100 h-36 py-8">
                            <div
                                className=" dark:bg-dark-main bg-gray-300 w-10 h-10 rounded-full mx-auto text-center cursor-pointer pt-1">
                                <i className="bx bx-plus text-2xl dark:text-white"></i>
                            </div>
                            <p className="text-center font-bold dark:text-white py-3">
                                Tạo tin
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <hr className="my-3 dark:bg-dark-second" />
            <div className="w-full my-2 wrapper-scrollbar overflow-y-auto" style={{ maxHeight: 460 }}>
                <p className="font-bold text-gray-800 dark:text-white">
                    <i className="fas fa-eye mr-2"></i>
                    <span>Chưa có người xem</span>
                </p>
                <p className="font-semibold text-sm text-gray-600 dark:text-white px-2 text-xm py-2">
                    Thông tin chi tiết về những người xem tin của bạn sẽ hiển thị ở đây.
                </p>
            </div>
        </div>
    )
}
