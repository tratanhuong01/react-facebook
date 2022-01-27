import React, { useEffect, useState } from 'react';
import AccountIsset from '../AccountIsset/AccountIsset';
import AccountNotIsset from '../AccountNotIsset/AccountNotIsset';

export default function SaveLogin() {
    //
    const [list, setList] = useState([]);
    useEffect(() => {
        //
        let accountList = [];
        if (localStorage && localStorage.getItem("accountList")) {
            accountList = JSON.parse(localStorage.getItem("accountList"));
            if (Array.isArray(accountList)) {
                setList(accountList);
            }
        }
        //
    }, [])
    //
    return <div className="w-full flex flex-col py-2 mx-auto sm:flex-col sm:pt-4 lg:flex-row lg:pt-20">
        <div
            className={`w-full xl:absolute ${true ? 'xl:top-1/3 mt-12' : 'xl:top-1/2'} transform xl:-translate-y-1/2 xl:py-0
            p-8 pr-4 sm:w-11/12 sm:mx-auto lg:w-1/2`}
        >
            {list.length > 0 ? (
                <AccountIsset list={list} setList={setList} />
            ) : (
                <AccountNotIsset />
            )}
        </div>
    </div>;
}
