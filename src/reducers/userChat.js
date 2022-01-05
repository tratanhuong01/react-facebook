import * as userChatsconstant from "../constants/UserChatConstant";

const initialState = {
    minize: [],
    zoom: []
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case userChatsconstant.UPDATE_DATA:
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
}

export default myReducer;