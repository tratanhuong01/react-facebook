import React from 'react'
import PreviewImageComment from '../PreviewImageComment/PreviewImageComment'
import CategoryInputComment from './CategoryInputComment/CategoryInputComment'

export default function TypeCommentInput(props) {
    //
    const { dataComment, setDataComment } = props;
    //
    return (
        <>
            <div className="w-full mx-0 my-2 flex relative">
                <div className="w-1/12">
                    <img className="w-12 h-12 p-0.5 object-cover rounded-full border-2 border-solid"
                        src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
                        alt="" srcSet="" />
                </div>
                <div className="w-11/12 ml-2 relative bg-gray-100 dark:bg-dark-third pl-1 overflow-hidden rounded-full">
                    <div className="border-none outline-none bg-gray-100 dark:bg-dark-third dark:text-white py-3"
                        style={{ minHeight: 30, width: "96%" }} contentEditable={true}
                        placeholder="Viết bình luận..."></div>
                    <CategoryInputComment setDataComment={setDataComment} dataComment={dataComment} />
                </div>
                <div className="z-50 hidden right-0 bg-white my-2 absolute w-72 dark:border-dark-second 
                shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second"
                    style={{ maxHeight: 360, height: 360 }}>
                </div>
            </div>
            {dataComment.value && dataComment.value.name && <PreviewImageComment dataComment={dataComment}
                setDataComment={setDataComment} />}
        </>
    )
}
