import React, { useState } from 'react'
import SettingMessageChild from './SettingMessageChild/SettingMessageChild';

const WrapperItemSetting = (props) => {
    //
    const [show, setShow] = useState(props.children ? true : false);
    //
    return (
        <>
            <li onClick={() => {
                if (props.children)
                    setShow(!show)
            }} className="w-full font-semibold py-2.5 px-4 cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-third 
                rounded-lg dark:text-white relative">
                {props.component({ show, name: props.name })}
            </li>
            {show && props.children}
        </>
    )
}

const ItemSetting = (props) => {
    return (
        <>
            {props.name}
            <i className={`fas fa-chevron-${props.show ? 'down' : 'right'} float-right absolute right-5 top-3.5`}></i>
        </>
    )
}

export default function SettingMessage(props) {
    //
    //
    return (
        <div className="w-1/3 hidden xl:block pr-2 wrapper-content-right shadow-xl h-full overflow-y-auto">
            <div className="w-full mt-2">
                <div className="xl:w-16 xl:h-16 my-2  object-cover rounded-full 
                mx-auto relative w-16 h-16">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1627385490/Messenger/AvatarUpdate/1000000025.jpg"
                        alt="" className="xl:w-16 xl:h-16 rounded-full object-cover mx-auto w-16 h-16" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500 absolute bottom-0 right-0.5"></span>
                </div>
                <p className="font-semibold text-center dark:text-white">Tuấn Tiền Tỉ</p>
                <p className="font-semibold text-center text-sm text-gray-600 dark:text-gray-300">Đang hoạt động</p>
            </div>
            <ul className="w-full py-2">
                <WrapperItemSetting component={ItemSetting} name={`Tùy chỉnh đoạn chat`}>
                    <SettingMessageChild groupMessage={props.groupMessage} setGroupMessage={props.setGroupMessage} />
                </WrapperItemSetting>
                <WrapperItemSetting component={ItemSetting} name={`Tệp được chia sẽ`}>
                </WrapperItemSetting>
                <WrapperItemSetting component={ItemSetting} name={`File phương tiện được chia sẽ`}>
                </WrapperItemSetting>
            </ul>
        </div>
    )
}


