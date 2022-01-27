import api from "../../api/api";
import * as constants from "./Constant";

export const loadUserProfileRequest = async (dispatch, actions, id) => {
    const result = await api(`users/id?id=${id}`, 'GET', null, {});
    if (result.data) {
        dispatch(actions.updateData("userProfile", result.data));
    }
    else {
        dispatch(actions.updateData("userProfile", ""));
    }
}

export const updateData = (key, value) => {
    return {
        type: constants.UPDATE_DATA,
        key,
        value
    }
}