import React, { useEffect, useRef, useState } from 'react'

export default function ImageVideoDisplay(props) {
    //
    const refContainer = useRef();
    const refLastNumber = useRef();
    const [data, setData] = useState();
    const { imageVideo } = props;
    useEffect(() => {
        //
        if (refContainer.current && imageVideo.length > 0) {
            const result = Array.from(imageVideo).slice(0, 5).map((element, index) => {
                const extension = element.src.split('.')[element.src.split('.').length - 1].toLowerCase();
                let ImageVideo = () => {
                    return ("");
                };
                if (extension === "jpg" || extension === "jpeg" || extension === "png") {
                    ImageVideo = (props) => {
                        return (
                            <img src={props.src} style={props.style} className={props.className} alt='' />
                        )
                    }
                }
                else {
                    if (extension === "mp4" || extension === "mov") {
                        ImageVideo = (props) => {
                            return (
                                <video src={props.src} style={props.style} className={props.className} alt='' />
                            )
                        }
                    }
                }
                const div = (index, length, widthOrHeight) => {
                    switch (index) {
                        case 1:
                            return 2;
                        case 2:
                            return 2;
                        case 3:
                            return length === 4 ? 2 : length === 3 ? widthOrHeight ? 1 : 2 : 3;
                        case 4:
                            return length === 4 ? 2 : 3;
                        case 5:
                            return 3;
                        default:
                            return 1;
                    }
                }
                const length = imageVideo.length;
                const width = refContainer.current.offsetWidth;
                if (refLastNumber.current) {
                    if (length > 4) {
                        refLastNumber.current.style.width = ((Math.floor(width / 3)) - 12) + "px";
                        refLastNumber.current.style.height = ((Math.floor(width / 3)) - 12) + "px";
                        refLastNumber.current.classList = `bg-black bg-opacity-50 flex justify-center items-center text-3xl 
                        font-bold absolute bottom-0 shadow-lv1 text-white right-1.5`
                    }
                }
                return <ImageVideo key={index} src={element.src} style={{
                    width: (length === 1 ? width : (Math.floor(width / div(index + 1, length, true))) - (index === 1 ? 8 : 8)) + "px",
                    height: (length === 1 ? width : (Math.floor(width / div(index + 1, length, false))) - 11) + "px",
                }} className={'object-cover'} />;
            });
            setData(result);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <div ref={refContainer} className='w-full gap-1.5 flex flex-wrap relative'>
            {data}
            {imageVideo.length > 5 && <div className='' ref={refLastNumber}>
                {`+${imageVideo.length - 5}`}
            </div>}
        </div>
    )
}
