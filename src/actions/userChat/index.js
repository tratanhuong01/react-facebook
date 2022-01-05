import * as userChatsConstant from "../../constants/UserChatConstant";

export const updateData = (key, value) => {
    return {
        type: userChatsConstant.UPDATE_DATA,
        key,
        value
    }
}