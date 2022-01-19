import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../../api/api';
import { PAGE_PROFILE } from '../../../../constants/Config';
import { UserProfileContext } from '../../../../contexts/UserProfileContext/UserProfileContext';

export default function ProfileFriendList() {
    //
    const [friends, setFriends] = useState([]);
    const { userProfile: { userProfile } } = useContext(UserProfileContext);
    const { headers } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`userRelationships/friends?idUserMain=${userProfile.id}&status=${3}&offset=${0}&limit=${9}&text=`,
                'GET', {}, headers);
            if (unmounted) return;
            setFriends(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userProfile])
    //
    return (
        <>
            <div className="w-full flex">
                <div className="w-1/2">
                    <p className="dark:text-white font-bold pt-2">Bạn bè <br /></p>
                    <span className="color-word">{friends.length} người bạn</span>
                </div>
                <div className="w-1/2 mt-2.5 pr-2.5 text-right text-main">
                    Xem tất cả
                </div>
            </div>
            <div className="w-full pt-4 flex flex-wrap">
                {friends.map(friend => (
                    <div key={friend.id} className="fr-us">
                        <Link to={`${PAGE_PROFILE}/${friend.userUserRelationShip.id}`}>
                            <img src={friend.userUserRelationShip.avatar} alt="" />
                        </Link>
                        <Link to={`${PAGE_PROFILE}/${friend.userUserRelationShip.id}`}
                            className="font-semibold py-2 dark:text-white text-sm">
                            {`${friend.userUserRelationShip.firstName} ${friend.userUserRelationShip.lastName}`}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
