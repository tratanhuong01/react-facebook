import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import { PostContext } from '../../../contexts/PostContext/PostContext';
import InputComponent from '../../InputComponent/InputComponent'
import ModalWrapperChildPost from '../ModalWrapperChildPost/ModalWrapperChildPost';
export default function ModalTagPost() {
    //
    const [users, setUsers] = useState([]);
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const { posts, postsDispatch, postsAction } = useContext(PostContext);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`userRelationships/friends?idUserMain=${user.id}&status=3&offset=0&limit=10`,
                'GET', null, headers);
            if (unmounted) return;
            setUsers(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    return (
        <ModalWrapperChildPost title="Gắn thẻ bạn bè">
            <div className="w-full my-2 px-2 flex items-center">
                <InputComponent className="dark:text-white font-bold w-10/12 p-2.5 pl-4 bg-transparent dark:bg-dark-third rounded-3xl 
                border border-solid border-gray-300" search={true} type="text" placeholder="Tìm kiếm bạn bè" />&nbsp;&nbsp;&nbsp;
                <span onClick={() => {
                    postsDispatch(postsAction.returnModalPost())
                }} className="font-bold ml-4 text-blue-500 cursor-pointer">Xong</span>
            </div>
            {posts.tags.length > 0 &&
                <div className="w-full pb-3 px-2">
                    <p className="w-full mx-auto dark:text-gray-300 font-bold py-1">Đã gắn thẻ</p>
                    <div className="w-full mx-auto p-2 border-2 border-solid border-gray-300 rounded-lg">
                        <div className="w-auto gap-2 flex flex-wrap max-h-32 overflow-y-auto">
                            {posts.tags.map((tag, index) => <div key={index}
                                className="my-1 break-all text-sm w-auto rounded-md cursor-pointer p-1.5 bg-blue-100 text-blue-500 font-bold">
                                {`${tag.firstName} ${tag.lastName}`}
                                <span onClick={() => {
                                    postsDispatch(postsAction.updateData('tags',
                                        [...posts.tags].filter((item) => item.id !== tag.id)));
                                }} className="ml-2 mr-1 text-xl cursor-pointer">&times;</span>
                            </div>)}
                        </div>
                    </div>
                </div>}
            <div className="tac-user wrapper-content-right" >
                <p className="w-11/12 mx-auto dark:text-gray-300 font-bold py-2">Gợi ý</p>
                {users.map((user) =>
                    <div onClick={() => {
                        postsDispatch(postsAction.updateData('tags',
                            [...posts.tags].findIndex(item => item.id === user.userUserRelationShip.id) === -1 ? [...posts.tags, user.userUserRelationShip]
                                : [...posts.tags].filter(item => item.id !== user.userUserRelationShip.id)
                        ))
                    }} key={user.id} className="w-full relative flex py-1.5 px-4 cursor-pointer hover:bg-gray-200 
                    rounded-lg dark:hover:bg-dark-third" >
                        <div className="text-center pr-2.5" >
                            <img className="w-12 h-12 rounded-full object-cover"
                                src={user.userUserRelationShip.avatar}
                                alt="" />
                        </div>
                        <div className="tac-user-2" style={{ paddingTop: "1%", paddingLeft: "2%" }}>
                            <p className="font-bold dark:text-white">{`${user.userUserRelationShip.firstName} ${user.userUserRelationShip.lastName}`}</p>
                        </div>
                        {([...posts.tags].findIndex(item => item.id === user.userUserRelationShip.id)) !== -1 &&
                            <span className="absolute top-1/2 transform -translate-y-1/2 right-8">
                                <i className="fas fa-check text-green-400 text-xl"></i>
                            </span>
                        }
                    </div>
                )}
            </div>
        </ModalWrapperChildPost>
    )
}
