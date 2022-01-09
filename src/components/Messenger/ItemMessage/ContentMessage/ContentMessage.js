import React, { forwardRef } from 'react'
import ItemSticker from '../../../Popovers/PopoverSticker/ItemSticker/ItemSticker';
import ChatText from '../ChatText/ChatText';

export default forwardRef(function ContentMessage(props, ref) {
    //
    const { item, margin, left } = props;
    const DataMessage = () => {
        let data = "";
        switch (item.typeMessage) {
            case 0:
                data = <ChatText item={item} margin={margin} left={left} />
                break;
            case 1:
                data = <img ref={ref} src={JSON.parse(item.dataMessage).value} alt={``}
                    className='w-80 h-56 rounded-lg object-cover' />;
                break;
            case 2:
                data = <ItemSticker ref={ref} sticker={JSON.parse(item.dataMessage).value} handleClick={() => ""} />
                break;
            default:
                break;
        }
        return data;
    }
    //
    return (
        <DataMessage />
    )
})