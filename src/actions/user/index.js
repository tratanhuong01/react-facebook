import api from "../../api/api";
import * as constants from "../../constants/ActionTypes";
import jwt_decode from "jwt-decode";

export const loginUserRequest = () => {
    return async (dispatch) => {
        if (localStorage && localStorage.getItem("user")) {
            const token = localStorage.getItem("user");
            const tokenParse = jwt_decode(token);
            if (tokenParse.exp > Math.floor(new Date() / 1000)) {
                const result = await api(`users?token=${token}`, 'GET', {}, {});
                if (result.data) {
                    dispatch(loginUser(result.data));
                }
            }
            else {
                localStorage.removeItem("user");
                dispatch(loginUser(null));
            }
        }
    }
}

export const loginUser = (user) => {
    return {
        type: constants.LOGIN,
        user
    }
}

export const logoutUser = () => {
    return {
        type: constants.LOGOUT
    }
}