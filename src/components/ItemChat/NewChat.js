import React from 'react'

const ItemNewChat = (props) => {
    return (
        <div className="w-full rounded-sm p-1.5 dark:hover:bg-dark-third hover:bg-gray-200 cursor-pointer flex">
            <div className="w-auto">
                <img src="http://res.cloudinary.com/ensonet-dev/image/upload/v1642301281/Posts/1642301277999.jpg"
                    className="w-12 h-12 p-1 object-cover rounded-full" alt="" srcSet="" />
            </div>
            <div className="w-8/12 px-3 py-3 dark:text-white">
                Tra Huong
            </div>
            <div className="w-2/12 py-3 text-center" >
            </div>
        </div>
    )
}

export default function NewChat() {
    return (
        <div className="w-full flex-1 p-1 relative">
            <div className='w-full h-full flex flex-col'>
                <div className="w-full py-1 flex items-start border-b-2 border-solid flex border-gray-200  
                dark:border-dark-third">
                    <div className="w-2/12 pl-2 font-bold py-2 dark:text-white">
                        Đến :
                    </div>
                    <div className="w-10/12 flex">
                        <div className="w-auto flex flex-wrap" >

                        </div>
                        <div className="border-none pl-3 outline-none dark:text-white py-2" contentEditable={true}
                            spellCheck={true}></div>
                    </div>
                </div>
                <div className="w-full flex-1 p-1 wrapper-content-right overflow-y-auto overflow-x-hidden">
                    {[1].map((item, index) => <ItemNewChat key={index} />)}
                </div>
            </div>
        </div>
    )
}
