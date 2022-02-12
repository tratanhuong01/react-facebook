import api from "../../api/api";
import * as constants from "../../constants/UserConstant";
import jwt_decode from "jwt-decode";
import { PAGE_LOGIN } from "../../constants/Config";

export const loginUserRequest = (token, navigation) => {
    return async (dispatch) => {
        if (token) {

        }
        else {
            if (localStorage && localStorage.getItem("user")) {
                token = localStorage.getItem("user");
            }
            else {
                localStorage.removeItem("user");
                dispatch(loginUser(false));
                return;
            }
        }
        const tokenParse = jwt_decode(token);
        if (tokenParse.exp > Math.floor(new Date() / 1000)) {
            const result = await api(`users/token?token=${token}`, 'GET', {}, {});
            if (result.data.users) {
                dispatch(loginUser(result.data.users));
                return;
            }
        }
        else {

        }
        if (typeof navigation === "function") {
            localStorage.removeItem("user");
            navigation(PAGE_LOGIN);
        }
    }
}

export const loginUser = (user) => {
    return {
        type: constants.LOGIN,
        user,
    }
}

export const logoutUser = () => {
    return {
        type: constants.LOGOUT
    }
}
