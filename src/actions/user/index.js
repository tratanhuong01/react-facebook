import * as constants from "../../constants/ActionTypes";

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