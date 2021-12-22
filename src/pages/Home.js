import React from 'react'
import HomeCenter from '../components/Home/HomeCenter/HomeCenter';
import HomeLeft from '../components/Home/HomeLeft/HomeLeft';
import HomeRight from '../components/Home/HomeRight/HomeRight';
import useTitle from '../hooks/useTitle'
import WrapperLogged from './WrapperLogged'

export default function Home() {
    //
    useTitle("Trang chủ");
    //
    return (
        <WrapperLogged>
            <div className="w-full flex z-10 pt-16 bg-gray-100 dark:bg-dark-main lg:w-full 
            lg:mx-auto xl:w-full" >
                <HomeLeft />
                <HomeCenter />
                <HomeRight />
            </div>
        </WrapperLogged>
    )
}
