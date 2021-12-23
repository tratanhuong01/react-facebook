import * as constants from "./Constant";

export const updateData = (key, value) => {
    return {
        type: constants.UPDATE_DATA,
        key,
        value
    }
}