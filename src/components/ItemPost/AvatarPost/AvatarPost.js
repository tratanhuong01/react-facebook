import React from 'react'

export default function AvatarPost() {
    return (
        <div className="w-full mx-0 my-2.5">
            <div className="w-full relative block" style={{ height: 430 }}>
                <img className="w-full h-60 object-cover"
                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/269598043_3071191429830703_3091086871323485121_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=5b7eaf&_nc_ohc=r880DieY4_QAX8K38Bv&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9cdbyzxVDCdwp3jCBsHsoBxpc_N1c77PIRMur991O37w&oe=61C502EF"
                    alt="" />
                <img className="absolute rounded-full object-cover left-1/2 transform -translate-x-1/2 border-4 border-solid border-white"
                    style={{ height: 390, width: 390, top: "5%" }}
                    src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                    alt="" />
            </div>
        </div>
    )
}
