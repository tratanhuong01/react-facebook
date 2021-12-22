import React from 'react'

export default function ProfileFriendList() {
    return (
        <>
            <div className="w-full flex">
                <div className="w-1/2">
                    <p className="dark:text-white font-bold pt-2">Bạn bè <br /></p>
                    <span className="color-word">8 người bạn</span>
                </div>
                <div className="w-1/2 mt-2.5 mr-2.5 text-right text-main">
                    Xem tất cả
                </div>
            </div>
            <div className="w-full pt-4 flex flex-wrap">
                <div className="fr-us">
                    <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg" alt="" />
                    <p className="font-bold py-2 dark:text-white text-sm">
                        tra thuan
                    </p>
                </div>
            </div>
        </>
    )
}
