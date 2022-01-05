import React from 'react'

export default function ContentComment(props) {
    //
    const { commentPost } = props;
    const DataCommentPost = () => {
        let data = "";
        switch (commentPost.typeComment) {
            case 0:
                break;
            case 1:
                data = <img src={JSON.parse(commentPost.dataComment).value} alt={``}
                    className='w-80 h-56 rounded-lg object-cover' />;
                break;
            default:
                break;
        }
        return data;
    }
    //
    return (
        <DataCommentPost />
    )
}
