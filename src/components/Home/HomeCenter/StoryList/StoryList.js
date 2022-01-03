import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../../api/api';
import ItemStory from '../ItemStory/ItemStory';

export default function StoryList() {
    //
    const { headers, user } = useSelector((state) => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const [stories, setStories] = useState([]);
    useEffect(() => {
        //
        if (user) {
            let unmounted = false;
            const fetch = async () => {
                const result = await api(`stories?idUser=${user.id}&offset=${0}&limit=${5}`, 'GET', null, headers);
                if (unmounted) return;
                setStories(result.data);
            }
            fetch();
            return () => {
                unmounted = true;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    //
    return (

        [...stories].slice(0, 5).map((story, index) => <ItemStory key={index} story={story}
            nearLast={index === 3 ? 'hidden lg:block' : ''} last={index === 4 ? 'hidden md:block' : ''}
            length={[...stories].slice(0, 5).length} index={index} />)

    )
}
