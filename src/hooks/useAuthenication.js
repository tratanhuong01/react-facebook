import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { PAGE_LOGIN } from "../constants/Config";
import api from "../api/api";

const useAuthenication = (getUser) => {
    const navigation = useNavigate();
    const [token, setToken] = useState();
    const [user, setUser] = useState()
    const params = new URLSearchParams(window.location.search);
    useEffect(() => {
        //
        let unmounted = false;
        try {
            const fetch = async () => {
                const tokenParam = params.get("token");
                const tokenParse = jwt_decode(tokenParam);
                if (tokenParse.exp < (new Date()).getTime()) {
                    setToken(tokenParse);
                    if (getUser) {
                        const result = await api(`users/id?id=${tokenParse.jti}`, 'GET', null, {});
                        if (result.data) {
                            setUser(result.data)
                        }
                        else {
                            navigation(PAGE_LOGIN)
                        }
                    }
                }
                else {
                    navigation(PAGE_LOGIN)
                }
            }
            if (unmounted) return;
            fetch();
        } catch (error) {
            navigation(PAGE_LOGIN)
        }
        return () => {
            unmounted = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { token, user, tokenPrevious: params.get("token") };
}

export default useAuthenication;