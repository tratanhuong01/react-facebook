import React, { forwardRef } from 'react'
import ItemSticker from '../../../Popovers/PopoverSticker/ItemSticker/ItemSticker';
import ChatText from '../ChatText/ChatText';

export default forwardRef(function ContentMessage(props, ref) {
    //
    const { item, margin, left, groupMessage } = props;
    const DataMessage = (props) => {
        let Data = "";
        switch (item.typeMessage) {
            case 0:
                Data = <ChatText item={item} groupMessage={props.groupMessage} margin={margin} left={left} />
                break;
            case 1:
                Data = <img ref={ref} src={JSON.parse(item.dataMessage).value} alt={``}
                    className='w-80 h-56 rounded-lg object-cover' />;
                break;
            case 2:
                Data = <ItemSticker ref={ref} groupMessage={props.groupMessage}
                    sticker={JSON.parse(item.dataMessage).value} handleClick={() => ""} />
                break;
            default:
                break;
        }
        return Data;
    }
    //
    return (
        <DataMessage groupMessage={groupMessage} />
    )
})