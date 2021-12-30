import * as constants from "../constants/ActionTypes";

const initialState = null;

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN:
            return action.user;
        case constants.LOGOUT:
            localStorage.removeItem('user');
            state = null;
            return state;
        default:
            return state;
    }
}

export default myReducer;