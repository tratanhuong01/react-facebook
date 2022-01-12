import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PAGE_MESSENGER } from '../../../../constants/Config';
import * as StringUtils from "../../../../utils/StringUtils";
import * as userChatsAction from "../../../../actions/userChat/index";

export default function ItemMessageList(props) {
    //
    const { user, userChat } = useSelector((state) => {
        return {
            user: state.user,
            userChat: state.userChat
        }
    });
    const dispatch = useDispatch();
    const { itemMessage, mini } = props;
    const navigation = useNavigate();
    //
    return (
        <div onClick={() => {
            if (mini) {
                dispatch(userChatsAction.updateData('zoom', [...userChat.zoom, {}]))
            }
            else {
                navigation(PAGE_MESSENGER + `/${itemMessage.groupMessage.queryGroupMessage}`)
            }
        }} className="w-full mess-person user__chat__child cursor-pointer flex relative py-2 px-1 
        dark:hover:bg-dark-third hover:bg-gray-200  ">
            <div className="w-full flex justify-center md:w-1/5 mr-3">
                <div className="xl:w-14 xl:h-14 object-cover rounded-full mx-auto relative w-16 h-16">
                    {itemMessage.groupMessage.typeGroupMessage === 0 ?
                        <img src={itemMessage.usersList.length > 0 ? itemMessage.usersList[0].avatar : ''}
                            alt="" className="xl:w-14 xl:h-14 rounded-full object-cover mx-auto w-16 h-16" />
                        : <div></div>
                    }
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500 absolute bottom-0 right-0.5"></span>
                </div>
            </div>
            <div className="w-4/5 hidden md:block">
                <div className="w-full text-left">
                    <span className="w-full font-semibold dark:text-gray-300 inline-block whitespace-nowrap 
                    overflow-ellipsis overflow-hidden max-w-full pr-4">Huong Dev</span>
                </div>
                <div className="w-full flex py-1 text-sm flex  md:pr-3 xl:pr-0">
                    <div className="w-full flex text-left  dark:text-gray-300 text-gray-500  font-semibold">
                        <div className="max-w-3/4 inline-block whitespace-nowrap text-left overflow-ellipsis 
                        overflow-hidden pr-1">
                            {StringUtils.generateMessage(itemMessage.groupMessage.typeGroupMessage, itemMessage.messages,
                                itemMessage.usersList, user.id)}
                        </div>
                        <div
                            className="w-1/4 flex pr-3 inline-block whitespace-nowrap overflow-ellipsis overflow-hidden">
                            · 1 tuần
                        </div>
                    </div>
                </div>
                <div
                    className="mess-edit top-4 right-8 text-center absolute rounded-full bg-gray-100 dark:bg-dark-second">
                    <i className="fas fa-ellipsis-h edit-mess dark:text-gray-300"></i>
                </div>
            </div>
        </div>
    )
}
