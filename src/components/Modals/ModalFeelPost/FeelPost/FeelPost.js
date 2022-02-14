import React, { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext/PostContext';


const ItemFeelPost = (props) => {
    //
    const { item } = props;
    const { posts, postsDispatch, postsAction } = useContext(PostContext);
    return (
        <div onClick={() => {
            postsDispatch(postsAction.updateData('feel', posts.feel ? null : item));
            postsDispatch(postsAction.updateData('activity', null));
            postsDispatch(postsAction.returnModalPost());
        }} className={`tac-user-clone pl-4 flex items-center dark:hover:bg-dark-third rounded-lg cursor-pointer 
        relative ${posts.feel ? posts.feel.id === item.id ? 'bg-gray-200' : 'hover:bg-gray-200' : 'hover:bg-gray-200'}`} >
            <div className="w-10 h-10 mr-4 flex justify-center items-center bg-gray-100 rounded-full dark:bg-dark-third">
                <span className="text-xl">{item.data}</span>
            </div>
            <p className="dark:text-white">{item.label.toLowerCase()}</p>
            <span className="absolute top-4 right-6">
            </span>
        </div>
    )
}

export default function FeelPost(props) {
    //
    const { feels } = props;
    //
    return (
        <div className='w-full flex flex-wrap'>
            {feels.map(item =>
                <ItemFeelPost item={item} key={item.id} />
            )}
        </div>
    )
}
