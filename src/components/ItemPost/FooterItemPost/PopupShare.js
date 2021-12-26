import React from 'react'

const PopupShare = React.forwardRef((props, ref) => {
    //

    //
    return (
        <div ref={ref} className="hidden bg-white my-3 arrow__bottom bottom-full absolute w-80 p-1 border-2 border-solid 
        rounded-lg dark:bg-dark-second z-50">
            <ul className="w-full">
                <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                hover:bg-gray-300">
                    <i className="bx bx-share text-2xl pr-2 rotate-90"></i>
                    Chia sẽ ngay (Công khai)
                </li>
                <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                hover:bg-gray-300">
                    <i className="bx bx-share text-2xl pr-2 rotate-90"></i>
                    Chia sẽ ngay (Bạn bè)
                </li>
                <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                hover:bg-gray-300">
                    <i className="bx bx-share text-2xl pr-2 rotate-90"></i>
                    Chia sẽ ngay (Chỉ mình tôi)
                </li>
                <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                hover:bg-gray-300">
                    <i className="fas fa-user-edit text-xl pr-2"></i>
                    Chia sẽ lên bản tin
                </li>
                <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                hover:bg-gray-300" >
                    <i className="bx bx-copy  text-xl pr-2"></i>
                    Sao chép liên kết
                </li>
                <li className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                hover:bg-gray-300">
                    <i className="bx bxl-messenger text-xl pr-2"></i>
                    Gửi qua messenger
                </li>
            </ul>
        </div>
    )
});
export default PopupShare; 
