import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PAGE_VIEW_POST } from '../../../constants/Config';

export default function ImageVideoDisplay(props) {
    //
    const refContainer = useRef();
    const refLastNumber = useRef();
    const [data, setData] = useState();
    const { imageVideo, idPost } = props;
    const navigation = useNavigate();
    const length = imageVideo.length;
    const height = imageVideo.length === 2 ? 330 : length >= 5 ? 550 - 82 : 550;
    useEffect(() => {
        //
        if (refContainer.current && length > 0) {
            const result = Array.from(imageVideo).slice(0, 5).map((element, index) => {
                const extension = element.src.split('.')[element.src.split('.').length - 1].toLowerCase();
                let ImageVideo = () => {
                    return ("");
                };
                if (extension === "jpg" || extension === "jpeg" || extension === "png") {
                    ImageVideo = (props) => {
                        return (
                            <img onClick={() => navigation(`${PAGE_VIEW_POST}/${idPost}`)}
                                src={props.src} style={props.style} className={props.className} alt='' />
                        )
                    }
                }
                else {
                    if (extension === "mp4" || extension === "mov") {
                        ImageVideo = (props) => {
                            return (
                                <Link to={`${PAGE_VIEW_POST}/${idPost}`}>
                                    <video src={props.src} style={props.style} className={props.className} alt='' />
                                </Link>
                            )
                        }
                    }
                }
                const divWidth = (index, length) => {
                    switch (index) {
                        case 3:
                            return length === 4 ? 1.5 : length === 3 ? 3 : 1;
                        case 4:
                            return length === 4 ? 1.5 : 1;
                        case 5:
                            return 1;
                        default:
                            return 1.5;
                    }
                }
                const divHeight = (index, length) => {
                    switch (index) {
                        case 3:
                            return length === 4 ? 40 : length === 3 ? 60 : 40;
                        case 4:
                            return length === 4 ? 60 : 40;
                        case 5:
                            return 40;
                        default:
                            return 60;
                    }
                }
                if (refLastNumber.current) {
                    if (length > 4) {
                        refLastNumber.current.style.width = `calc(${(divWidth(index + 1, length) / 3) * 100 + "%"} - 5px)`;
                        refLastNumber.current.style.height = `${divHeight(index + 1, length)}%`;
                        refLastNumber.current.classList = `bg-black bg-opacity-50 flex justify-center items-center text-3xl 
                        font-bold absolute -bottom-1.5 shadow-lv1 text-white right-0.5`
                    }
                }
                return <ImageVideo key={index} src={element.src} style={{
                    width: length === 1 ? "100%" : `calc(${(divWidth(index + 1, length) / 3) * 100 + "%"} - 5px)`,
                    height: length === 1 ? "100%" : `${divHeight(index + 1, length)}%`,
                    maxHeight: height,
                    cursor: "pointer"
                }} className={'object-cover'} />;
            });
            setData(result);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <div ref={refContainer} className='w-full gap-1.5 flex flex-wrap relative'
            style={imageVideo.length > 0 ? { height: height } : {}}>
            {data}
            {imageVideo.length > 5 && <div className='' ref={refLastNumber}>
                {`+${imageVideo.length - 5}`}
            </div>}
        </div>
    )
}
