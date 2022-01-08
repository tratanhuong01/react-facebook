import React, { forwardRef, useState } from 'react'

export default forwardRef(function ItemSticker(props, ref) {
    //
    const { sticker, handleClick } = props;
    const data = `stickerAnimation:${sticker.col}:${sticker.row}`;
    const [animation, setAnimation] = useState("");
    //
    return (
        <div
            ref={ref}
            onClick={(event) => handleClick(sticker)}
            onMouseMove={() => {
                setAnimation(data);
            }}
            onMouseLeave={() => {
                setAnimation("");
            }}
            className="w-20 mr-1 cursor-pointer"
        >
            <div
                className={`w-20 h-20 max-w-20 max-h-20 p-1 overflow-hidden bg-size:${sticker.col}:${sticker.row}  
                ${animation} relative`}
                style={{ backgroundImage: `url('${sticker.src}')` }}
            ></div>
        </div>
    )
})