import * as constants from "../constants/ActionTypes";

const initialState = localStorage && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN:
            localStorage.setItem('user', JSON.stringify(action.user));
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