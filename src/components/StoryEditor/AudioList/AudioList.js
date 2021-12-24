import React, { useContext, useEffect, useRef, useState } from 'react'
import audioList from '../../../config/audioList'
import { StoryEditorContext } from '../../../contexts/StoryEditorContext/StoryEditorContext'
import InputComponent from '../../InputComponent/InputComponent'

export default function AudioList() {
    //
    const refAudio = useRef();
    const [play, setPlay] = useState(false);
    useEffect(() => {
        //
        if (!play) {
            if (refAudio.current) {
                refAudio.current.pause();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [play])
    const { storyEditor: { audio } } = useContext(StoryEditorContext);
    //
    return (
        <div className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white 
                        mb-2 dark:border-dark-third  text-center shadow-xl" style={{ maxHeight: 384, height: 384 }}>
            <p className="font-bold text-xm text-left py-1 px-2 dark:text-white">Âm nhạc</p>
            <audio ref={refAudio} autoPlay src={audio ? audio.src : ''} className='hidden' loop />
            <InputComponent type="text" name="" className="justify-center dark:bg-dark-third bg-gray-100
            p-2.5 rounded-lg dark:text-white my-3" width="w-11/12" placeholder="Nhập tên bài hát" />
            <ul className="w-full text-left wrapper-content-right text-center overflow-y-auto">
                {audioList.map((item, index) =>
                    <ItemAudio index={index} key={index} item={item} refAudio={refAudio}
                        play={play} setPlay={setPlay} />)}
            </ul>
        </div>
    )
}

const ItemAudio = (props) => {
    //
    const { storyEditor: { audio }, storyEditorsDispatch, storyEditorsAction } = useContext(StoryEditorContext);
    const { refAudio, item } = props;
    const [current, setCurrent] = useState(false);
    useEffect(() => {
        if (audio) {
            if (audio.id !== item.id) {
                setCurrent(false)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audio])
    //
    return (
        <li className="w-full flex p-1 border-2 border-solid border-gray-300 
        dark:border-dark-third relative cursor-pointer w-72">
            <div className="w-2/12 pt-1">
                <img src="/images/mp3.png" className="w-10 h-10 p-0.5 rounded-full 
                object-cover" alt="" />
            </div>
            <div onClick={() => {
                storyEditorsDispatch(storyEditorsAction.updateData('audio', item))
            }} className="w-8/12 font-semibold dark:text-white text-left">
                <p className="">{`${item.name}`}</p>
                <p className="text-xs text-gray-600">{`${item.author}`}</p>
            </div>
            <div onClick={() => {
                if (refAudio.current) {
                    refAudio.current.play()
                    storyEditorsDispatch(storyEditorsAction.updateData('audio', item))
                    if (!current) {
                        refAudio.current.play();
                    }
                    else {
                        refAudio.current.pause();
                    }
                    setCurrent(!current)
                }
            }} className="absolute top-3 right-3 dark:text-white cursor-pointer">
                <i className={`${current ? 'fas fa-stop-circle' : 'fas fa-play-circle'} text-xl`}></i>
            </div>
        </li>
    )
}