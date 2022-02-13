import React from 'react'
import InputComponent from '../components/InputComponent/InputComponent'
import ItemPost from '../components/ItemPost/ItemPost'
import ListItemWatchLeft from '../components/Watch/WatchLeft/ListItemWatchLeft/ListItemWatchLeft'
import WatchNewBest from '../components/Watch/WatchRight/WatchNewBest/WatchNewBest'
import WrapperLogged from './WrapperLogged'

export default function Watch() {
    //
    const images = [
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1641207920/Avatars/1641207917807.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1644224603/Avatars/260347987_860340711422545_5819341585161953123_n_iagczo.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1644153514/Avatars/1644153513203.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1641689086/Avatars/1641689084784.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1642577149/Avatars/1642577147030.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1641723012/Avatars/1641723009621.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1641341881/Avatars/1641341879260.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1641780665/Avatars/1641780661442.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1641341853/Avatars/1641341850630.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1642584539/Avatars/1642584537675.jpg`,
        `https://res.cloudinary.com/ensonet-dev/image/upload/v1644047439/Avatars/1644047430768.jpg`
    ]
    //
    return (
        <WrapperLogged>
            <div className='w-full h-screen pt-20 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row'>
                <div className='w-full md:w-1/3 lg:w-1/4 relative xl:w-1/5 flex 
                flex-col h-auto lg:h-full px-5'>
                    <div className='w-full flex flex-col items-start'>
                        <div className='w-full dark:text-gray-300 flex items-center justify-between py-2'>
                            <span className='text-2xl font-bold'>Watch</span>
                            <span className='fas fa-cog w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-third 
                            md:flex items-center hidden justify-center text-xl hover:bg-gray-300 dark:hover:bg-dark-second'></span>
                        </div>
                        <div className='md:flex hidden w-full '>
                            <InputComponent type="text" search={true} placeholder="Tìm kiếm video..."
                                className={"p-2 bg-gray-200 dark:bg-dark-third rounded-full"} />
                        </div>
                    </div>
                    <div className='w-auto md:w-full flex-1 overflow-y-auto absolute md:static -top-1.5 left-28'>
                        <ListItemWatchLeft images={images} />
                    </div>
                </div>
                <div className='w-full md:w-2/3 lg:w-3/4 h-auto lg:h-full overflow-y-auto'>
                    <div className='xl:w-3/4 w-full md:w-11/12 mx-auto'>
                        <WatchNewBest images={images} />
                        <div className='w-full p-5'>
                            <ItemPost postDetail={{
                                "post": {
                                    "id": 60,
                                    "userPost": {
                                        "id": 1,
                                        "firstName": "Tra",
                                        "lastName": "Huong",
                                        "email": "trahuong.dev@gmail.com",
                                        "phone": null,
                                        "password": "huongtra2001",
                                        "gender": "Nam",
                                        "birthday": "2001-06-13 21:57:49",
                                        "avatar": "http://res.cloudinary.com/ensonet-dev/image/upload/v1642584539/Avatars/1642584537675.jpg",
                                        "cover": "http://res.cloudinary.com/ensonet-dev/image/upload/v1642584409/Covers/1642584405878.png",
                                        "description": null,
                                        "isTick": 0,
                                        "codeEmail": "6869847",
                                        "codePhone": null,
                                        "isOnline": 1,
                                        "isDark": 0,
                                        "timeCreated": "2022-01-03 23:10:21"
                                    },
                                    "content": "",
                                    "feel": null,
                                    "local": null,
                                    "activity": null,
                                    "answerQuestion": null,
                                    "backgroundPost": null,
                                    "typePost": 2,
                                    "timeCreated": "2022-02-12 10:20:53"
                                },
                                "feelPostList": [],
                                "commentLength": 0,
                                "commentLevel1Length": 0,
                                "imageVideoPostList": [
                                    {
                                        "id": 34,
                                        "postImageVideoPost": {
                                            "id": 60,
                                            "userPost": {
                                                "id": 1,
                                                "firstName": "Tra",
                                                "lastName": "Huong",
                                                "email": "trahuong.dev@gmail.com",
                                                "phone": null,
                                                "password": "huongtra2001",
                                                "gender": "Nam",
                                                "birthday": "2001-06-13 21:57:49",
                                                "avatar": "http://res.cloudinary.com/ensonet-dev/image/upload/v1642584539/Avatars/1642584537675.jpg",
                                                "cover": "http://res.cloudinary.com/ensonet-dev/image/upload/v1642584409/Covers/1642584405878.png",
                                                "description": null,
                                                "isTick": 0,
                                                "codeEmail": "6869847",
                                                "codePhone": null,
                                                "isOnline": 1,
                                                "isDark": 0,
                                                "timeCreated": "2022-01-03 23:10:21"
                                            },
                                            "content": "",
                                            "feel": null,
                                            "local": null,
                                            "activity": null,
                                            "answerQuestion": null,
                                            "backgroundPost": null,
                                            "typePost": 2,
                                            "timeCreated": "2022-02-12 10:20:53"
                                        },
                                        "src": "https://res.cloudinary.com/tratahuong01/video/upload/v1644638287/Video/tpk0a9swx1utlngijnim.mp4",
                                        "typeImageVideoPost": 1,
                                        "timeCreated": "2022-02-12 10:21:02"
                                    }
                                ],
                                "commentDetailList": [],
                                "tagPostList": []
                            }} />
                        </div>
                    </div>

                </div>

            </div>
        </WrapperLogged>
    )
}
