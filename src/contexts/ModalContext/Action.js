import * as constants from "./Constant";

export const openModalRegister = () => {
    return {
        type: constants.OPEN_MODAL_REGISTER
    }
}

export const openModalAddAccountLogin = () => {
    return {
        type: constants.OPEN_MODAL_ADD_ACCOUNT_LOGIN
    }
}

export const closeModal = () => {
    return {
        type: constants.CLOSE_MODAL
    }
}

export const loadingModal = (status) => {
    return {
        type: constants.LOADING_MODAL,
        status
    }
}

export const openModalLogin = (loginFast) => {
    return {
        type: constants.OPEN_MODAL_LOGIN,
        loginFast,
    }
}

export const openModalPost = (id, feel, imageVideo) => {
    return {
        type: constants.OPEN_MODAL_POST,
        id,
        feel,
        imageVideo
    }
}

export const updatePopover = (status) => {
    return {
        type: constants.UPDATE_POPOVER,
        status
    }
}

export const openModalPreviewAvatar = (image, userProfile, userProfilesDispatch, userProfilesAction) => {
    return {
        type: constants.OPEN_MODAL_PREVIEW_AVATAR,
        image,
        userProfile,
        userProfilesDispatch,
        userProfilesAction
    }
}

export const openModalChangeColor = (groupMessage, setGroupMessage) => {
    return {
        type: constants.OPEN_MODAL_CHANGE_COLOR,
        groupMessage,
        setGroupMessage
    }
}

export const openModalChangeEmojii = (groupMessage, setGroupMessage) => {
    return {
        type: constants.OPEN_MODAL_CHANGE_EMOJII,
        groupMessage,
        setGroupMessage
    }
}

export const openModalChangeNickName = (users, groupMessage, setGroupMessage) => {
    return {
        type: constants.OPEN_MODAL_CHANGE_NICK_NAME,
        users,
        groupMessage,
        setGroupMessage
    }
}

export const openModalDeletePost = (title, content, button, handleEvent) => {
    return {
        type: constants.OPEN_MODAL_DELETE_POST,
        title,
        content,
        button,
        handleEvent
    }
}