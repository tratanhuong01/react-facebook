import * as usersConstant from "../constants/UserConstant";

const initialState = null;

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersConstant.LOGIN:
            return action.user;
        case usersConstant.LOGOUT:
            localStorage.removeItem('user');
            state = null;
            return state;
        default:
            return state;
    }
}

export default myReducer;