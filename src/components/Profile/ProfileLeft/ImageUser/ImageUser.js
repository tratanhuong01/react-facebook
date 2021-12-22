import React from 'react'

export default function ImageUser() {
    return (
        <>
            <div className="w-full flex">
                <div className="w-full mt-2.5 mr-2.5">
                    <p className="font-bold dark:text-white">Ảnh<br /></p>
                </div>
                <div className="w-full text-right mt-2.5 mr-2.5 text-main">
                    Xem tất cả
                </div>
            </div>
            <div className="w-full pt-4 pl-0.5 flex flex-wrap">
                <div className="fr-us">
                    <img
                        className="object-cover rounded-lg"
                        src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" />
                </div>
            </div>
        </>
    )
}
