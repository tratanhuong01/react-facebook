import ModalLogin from "../../components/Modals/Login/ModalLogin/ModalLogin";
import ModalRegister from "../../components/Modals/Login/ModalRegister/ModalRegister";
import ModalWrapperPost from "../../components/Modals/ModalWrapperPost/ModalWrapperPost";
import * as constants from "./Constant";

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.OPEN_MODAL_REGISTER:
            return { ...state, data: <ModalRegister /> };
        case constants.LOADING_MODAL:
            return { ...state, loading: action.status };
        case constants.CLOSE_MODAL:
            return { ...state, loading: false, data: null };
        case constants.OPEN_MODAL_LOGIN:
            return { ...state, data: <ModalLogin loginFast={action.loginFast} /> };
        case constants.OPEN_MODAL_POST:
            return {
                ...state, data: <ModalWrapperPost id={action.id} feel={action.feel}
                    imageVideo={action.imageVideo} />
            };
        default:
            return { ...state };
    }
}
export default AppReducer;