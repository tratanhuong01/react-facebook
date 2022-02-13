const initialState = {
    list: [],
    index: 0
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_DATA_POST_LIST":
            return { ...state, [action.key]: action.value };
        case "RESET_POST_LIST":
            return { ...initialState };
        default:
            return { ...state };
    }
}

export default myReducer;