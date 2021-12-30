let initialState = {};
if (localStorage && localStorage.getItem("user")) {
    const token = localStorage.getItem('user');
    if (token) {
        initialState = { Authorization: localStorage.getItem("user") };
    }
}
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        //
        default:
            return state;
    }
};
export default myReducer;
