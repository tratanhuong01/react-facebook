import React from 'react'

export default function AvatarPost() {
    return (
        <div className="w-full mx-0 my-2.5">
            <div className="w-full relative block" style={{ height: 430 }}>
                <img className="w-full h-60 object-cover"
                    src="https://res.cloudinary.com/tratahuong01/image/upload/v1620693023/Avatar/l1t54blrxfzgz3cdvd04.jpg"
                    alt="" />
                <img className="absolute rounded-full object-cover left-1/2 transform -translate-x-1/2 border-4 border-solid border-white"
                    style={{ height: 390, width: 390, top: "5%" }}
                    src="https://res.cloudinary.com/tratahuong01/image/upload/v1619944098/Avatar/hn78abc4gea5wryanlta.jpg"
                    alt="" />
            </div>
        </div>
    )
}
