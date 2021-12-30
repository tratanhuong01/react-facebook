import api from "../../api/api";
import * as constants from "../../constants/ActionTypes";

export const loginUserRequest = () => {
    return async (dispatch) => {
        if (localStorage && localStorage.getItem("user")) {
            const token = localStorage.getItem("user");
            const result = await api(`users?token=${token}`, 'GET', {}, {});
            if (result.data) {
                dispatch(loginUser(result.data));
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