import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../../../api/api';
import { PAGE_CREATE_STORY } from '../../../../constants/Config';
import { UserProfileContext } from '../../../../contexts/UserProfileContext/UserProfileContext';
import ButtonComponent from '../../../ButtonComponent/ButtonComponent';
import ButtonRelationshipUser from './ButtonRelationshipUser/ButtonRelationshipUser';
import * as StringUtils from "../../../../utils/StringUtils";

export default function RelationshipUserStatus(props) {
    //
    const { user, headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    });
    const navigation = useNavigate();
    const { userProfile: { userProfile } } = useContext(UserProfileContext);
    const [userRelationship, setUserRelationship] = useState(null);
    const process = async (status) => {
        if (status === 1) {
            const result = await api(`userRelationships`, 'POST', {
                id: null,
                userUserRelationShip: user,
                idFriend: userProfile.id,
                status: 1,
            }, headers);
            await api(`userRelationships`, 'POST', {
                id: null,
                userUserRelationShip: userProfile,
                idFriend: user.id,
                status: 2,
            }, headers);
            if (result.data) {
                setUserRelationship(result.data);
            }
        }
        else if (status === -1) {
            await api(`userRelationships?idUserProfile=${userProfile.id}&idUserMain=${user.id}`, 'DELETE', null, headers);
            await api(`userRelationships?idUserProfile=${user.id}&idUserMain=${userProfile.id}`, 'DELETE', null, headers);
            setUserRelationship(null);
        }
        else {
            await api(`userRelationships?idUserProfile=${userProfile.id}&idUserMain=${user.id}&status=${status}`,
                'PUT', null, headers);
            await api(`userRelationships?idUserProfile=${user.id}&idUserMain=${userProfile.id}&status=${status}`,
                'PUT', null, headers);
            const idGroupMessage = StringUtils.generateString(user, userProfile);
            const checkGroupIsset = await api(`groupMessages/check`, 'POST', { string: idGroupMessage }, headers);
            if (checkGroupIsset.data) {

            }
            else {
                const groupMessage = await api("groupMessages", 'POST', {
                    id: null,
                    nameGroupMessage: null,
                    theme: null,
                    color: "#ccc",
                    userGroupMessage: user,
                    emoji: "🙆‍♂️",
                    queryGroupMessage: idGroupMessage,
                    typeGroupMessage: 0,
                    timeCreated: null,
                }, headers);
                const object = {
                    id: null,
                    userMessage: null,
                    groupMessageMessage: groupMessage.data,
                    content: null,
                    dataMessage: JSON.stringify({}),
                    replyMessage: null,
                    typeMessage: -1,
                    timeCreated: null,
                }
                await api(`messages`, 'POST', { ...object, userMessage: user }, headers);
                await api(`messages`, 'POST', { ...object, userMessage: userProfile }, headers);
            }
            setUserRelationship({ ...userRelationship, status });
        }
    }
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`userRelationships/check/relationship?idUserProfile=${userProfile.id}&idUserMain=${user.id}`,
                'GET', null, headers);
            if (unmounted) return;
            setUserRelationship(result.data);
        }
        if (user.id !== userProfile.id)
            fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userProfile]);
    //
    return (
        <div className="flex md:justify-end justify-start items-center w-full md:w-auto">
            {((!userRelationship && userProfile.id !== user.id)) && <>
                <ButtonRelationshipUser handleClick={(status) => process(status)} status={1} blue={false}
                    icon="bx bxs-user-plus" label={"Thêm bạn bè"} show={true} >
                </ButtonRelationshipUser>
            </>}
            {((userRelationship && userRelationship.status === 2)) && <>
                <ButtonRelationshipUser handleClick={(status) => process(status)} status={3} blue={true}
                    icon="bx bx-user-check" label={"Phản hồi"} show={false} >
                </ButtonRelationshipUser>
                <ButtonRelationshipUser handleClick={(status) => process(status)} status={-1} blue={false}
                    icon="bx bx-user-delete" label={"Xoá lời mời"} show={false} >
                </ButtonRelationshipUser>
            </>}
            {(userRelationship ? ((userRelationship.status === 1 || userRelationship.status === 3) && (user.id !== userProfile.id)) &&
                <ButtonRelationshipUser handleClick={(status) => process(status)} status={-1} show={true}
                    icon={userRelationship.status === 3 ? 'bx bx-user-check' : 'bx bxs-user-x'}
                    label={userRelationship.status === 3 ? 'Bạn bè' : 'Huỷ lời mời'} >
                </ButtonRelationshipUser> : "")
            }
            {user.id === userProfile.id &&
                <>
                    <ButtonComponent handleClick={() => navigation(PAGE_CREATE_STORY)} className="flex items-center h-10 px-2 bg-main rounded-lg mr-2 text-white font-semibold text-sm">
                        <div className="w-5 h-5 mr-1.5 rounded-full bg-white flex justify-center items-center 
                                text-main"><i className="bx bx-plus"></i></div>Thêm vào tin
                    </ButtonComponent>
                    <ButtonComponent className=" rounded-lg h-10 px-2 font-semibold bg-gray-200 hover:bg-gray-300 text-sm flex items-center">
                        <i className="bx bxs-pencil text-xl mr-2"></i> Chỉnh sửa trang cá nhân
                    </ButtonComponent>
                </>}
        </div>
    )
}
