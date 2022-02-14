import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../../../api/api';
import { PAGE_PROFILE } from '../../../../../constants/Config';
import ButtonComponent from '../../../../ButtonComponent/ButtonComponent';
import * as StringUtils from "../../../../../utils/StringUtils";

export default function ItemInviteFriend(props) {
  //
  const { item, list, setList } = props;
  const [loading, setLoading] = useState(false);
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers
    }
  })
  const handleClick = async (status) => {
    setLoading(true);
    if (status === 0) {
      await api(`userRelationships?idUserProfile=${item.userUserRelationShip.id}&idUserMain=${user.id}`, 'DELETE', null, headers);
      await api(`userRelationships?idUserProfile=${user.id}&idUserMain=${item.userUserRelationShip.id.id}`, 'DELETE', null, headers);
    }
    else {
      await api(`userRelationships?idUserProfile=${item.userUserRelationShip.id}&idUserMain=${user.id}&status=${status}`,
        'PUT', null, headers);
      await api(`userRelationships?idUserProfile=${user.id}&idUserMain=${item.userUserRelationShip.id}&status=${status}`,
        'PUT', null, headers);
      const idGroupMessage = StringUtils.generateString(user, item.userUserRelationShip);
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
        await api(`messages`, 'POST', { ...object, userMessage: item.userUserRelationShip }, headers);
      }
      setList([...list].filter(dt => dt.id !== item.id));
    }
  }
  //
  return (
    <div className='w-full flex relative p-2 bg-white rounded-lg dark:bg-dark-third my-2'>
      <img src={item.userUserRelationShip.avatar} alt=''
        className='w-14 h-14 rounded-full object-cover mr-1' />
      <div className='ml-1' style={{ width: "calc(100% - 64px)" }}>
        <p className='font-semibold cursor-pointer dark:text-white'>
          <Link to={PAGE_PROFILE + "/" + item.userUserRelationShip.id}>
            {`${item.userUserRelationShip.firstName} ${item.userUserRelationShip.lastName}`}
          </Link>
        </p>
        <div className='flex gap-2 text-sm text-gray-500 dark:text-gray-300 items-center my-1'>
          <img src='http://res.cloudinary.com/ensonet-dev/image/upload/v1644153514/Avatars/1644153513203.jpg'
            alt='' className='w-4 h-4 rounded-full object-cover' />
          <span>1 bạn chung </span>
        </div>
        <div className='w-full flex gap-3 justify-between mt-2'>
          <ButtonComponent handleClick={() => handleClick(3)} loading={loading} disabled={loading}
            className="w-1/2 cursor-pointer rounded-lg py-2 text-sm font-semibold bg-main text-white">
            Xác nhận
          </ButtonComponent>
          <ButtonComponent handleClick={() => handleClick(0)} loading={loading} disabled={loading}
            className="w-1/2 cursor-pointer rounded-lg py-2 text-sm font-semibold bg-gray-200">
            Xoá
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}
