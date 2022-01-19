import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import api from '../../api/api';
import LoadingChildren from './LoadingChildren';

export default function WrapperContentChildProfile(props) {
    //
    const { user, headers } = useSelector(state => {
        return {
            user: state.user,
            headers: state.headers
        }
    })
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //
        let unmounted = false;
        let timeOut;
        const fetch = async () => {
            setLoading(true);
            const result = await api(props.url, 'GET', null, headers);
            if (unmounted) return;
            timeOut = setTimeout(() => {
                props.setData(result.data);
                setLoading(false);
            }, 800)
        }
        fetch();
        return () => {
            clearTimeout(timeOut);
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, location.pathname, props.setData])
    return (
        <>
            <div className="py-2 px-4 mb-2 text-center border-b-2 border-solid border-main text-main" >
                {props.label}
            </div>
            {<div className='my-2 w-full flex flex-wrap' style={{ display: loading ? 'none' : 'flex' }}>
                {props.children}
            </div>}
            {loading && <LoadingChildren />}

        </>
    )
}
