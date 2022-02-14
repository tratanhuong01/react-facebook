import ModalAnswerQuestionPost from "../../components/Modals/ModalAnswerQuestionPost/ModalAnswerQuestionPost";
import ModalChooseBackground from "../../components/Modals/ModalChooseBackground/ModalChooseBackground";
import ModalEditImageVideo from "../../components/Modals/ModalEditImageVideo/ModalEditImageVideo";
import ModalFeelPost from "../../components/Modals/ModalFeelPost/ModalFeelPost";
import ModalLocalPost from "../../components/Modals/ModalLocalPost/ModalLocalPost";
import ModalPost from "../../components/Modals/ModalPost/ModalPost";
import ModalTagPost from "../../components/Modals/ModalTagPost/ModalTagPost";
import * as constants from "./Constant";

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_DATA:
            return { ...state, [action.key]: action.value };
        case constants.OPEN_MODAL_TAG:
            return { ...state, component: <ModalTagPost /> };
        case constants.OPEN_MODAL_LOCAL:
            return { ...state, component: <ModalLocalPost /> };
        case constants.OPEN_MODAL_FEEL:
            return { ...state, component: <ModalFeelPost /> };
        case constants.RETURN_MODAL_POST:
            return { ...state, component: <ModalPost /> };
        case constants.OPEN_MODAL_CHOOSE_BACKGROUND:
            return { ...state, component: <ModalChooseBackground /> };
        case constants.OPEN_MODAL_IMAGE_VIDEO_EDIT:
            return { ...state, component: <ModalEditImageVideo /> };
        case constants.OPEN_MODAL_ANSWER_QUESTION:
            return { ...state, component: <ModalAnswerQuestionPost /> };
        case constants.UPDATE_DATA_FULL:
            return { ...action.data };
        default:
            return { ...state };
    }
}
export default AppReducer;