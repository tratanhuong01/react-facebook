import ModalLogin from "../../components/Modals/Login/ModalLogin/ModalLogin";
import ModalRegister from "../../components/Modals/Login/ModalRegister/ModalRegister";
import ModalChangeColor from "../../components/Modals/Messages/ModalChangeColor/ModalChangeColor";
import ModalChangeEmojii from "../../components/Modals/Messages/ModalChangeEmojii/ModalChangeEmojii";
import ModalChangeNickName from "../../components/Modals/Messages/ModalChangeNickName/ModalChangeNickName";
import ModalWarning from "../../components/Modals/ModalWarning/ModalWarning";
import ModalWrapperPost from "../../components/Modals/ModalWrapperPost/ModalWrapperPost";
import ModalPreviewAvatar from "../../components/Modals/Profile/ModalPreviewAvatar/ModalPreviewAvatar";
import * as constants from "./Constant";

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.OPEN_MODAL_REGISTER:
            return { ...state, data: <ModalRegister /> };
        case constants.LOADING_MODAL:
            return { ...state, loading: action.status };
        case constants.CLOSE_MODAL:
            return { ...state, loading: false, data: null, popover: false };
        case constants.UPDATE_POPOVER:
            return { ...state, popover: action.status };
        case constants.OPEN_MODAL_LOGIN:
            return { ...state, data: <ModalLogin loginFast={action.loginFast} /> };
        case constants.OPEN_MODAL_POST:
            return {
                ...state, data: <ModalWrapperPost id={action.id} feel={action.feel}
                    imageVideo={action.imageVideo} />
            };
        case constants.OPEN_MODAL_PREVIEW_AVATAR:
            return {
                ...state, data: <ModalPreviewAvatar image={action.image} userProfile={action.userProfile}
                    userProfilesDispatch={action.userProfilesDispatch} userProfilesAction={action.userProfilesAction} />
            };
        case constants.OPEN_MODAL_CHANGE_COLOR:
            return {
                ...state, data: <ModalChangeColor groupMessage={action.groupMessage}
                    setGroupMessage={action.setGroupMessage} />
            };
        case constants.OPEN_MODAL_CHANGE_EMOJII:
            return {
                ...state, data: <ModalChangeEmojii groupMessage={action.groupMessage}
                    setGroupMessage={action.setGroupMessage} />
            };
        case constants.OPEN_MODAL_CHANGE_NICK_NAME:
            return {
                ...state, data: <ModalChangeNickName groupMessage={action.groupMessage} users={action.users}
                    setGroupMessage={action.setGroupMessage} />
            };
        case constants.OPEN_MODAL_DELETE_POST:
            return {
                ...state, data: <ModalWarning title={action.title} content={action.content}
                    handleEvent={action.handleEvent} button={action.button} />
            }
        default:
            return { ...state };
    }
}
export default AppReducer;