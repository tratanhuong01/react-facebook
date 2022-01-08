import React, { forwardRef } from 'react'
import ItemSticker from '../../../Popovers/PopoverSticker/ItemSticker/ItemSticker';

export default forwardRef(function ContentComment(props, ref) {
    //
    const { commentPost } = props;
    const DataCommentPost = () => {
        let data = "";
        switch (commentPost.typeComment) {
            case 0:
                break;
            case 1:
                data = <img ref={ref} src={JSON.parse(commentPost.dataComment).value} alt={``}
                    className='w-80 h-56 rounded-lg object-cover' />;
                break;
            case 2:
                data = <ItemSticker ref={ref} sticker={JSON.parse(commentPost.dataComment).value} handleClick={() => ""} />
                break;
            default:
                break;
        }
        return data;
    }
    //
    return (
        <DataCommentPost />
    )
})