import React from 'react'
import { Link } from 'react-router-dom';

export default function CoverPost(props) {
    //
    const { postDetail: { imageVideoPostList } } = props;
    //
    return (
        <div className='w-full my-1'>
            <Link to={""}>
                <img src={imageVideoPostList.length > 0 && imageVideoPostList[0].src} alt=''
                    className='w-full h-64 object-cover' />
            </Link>
        </div>
    )
}
