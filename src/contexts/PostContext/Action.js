import * as constants from "./Constant";

export const updateData = (key, value) => {
    return {
        type: constants.UPDATE_DATA,
        key,
        value
    }
}

export const openModalFeel = () => {
    return {
        type: constants.OPEN_MODAL_FEEL,
    }
}

export const openModalTag = () => {
    return {
        type: constants.OPEN_MODAL_TAG,
    }
}

export const openModalLocal = () => {
    return {
        type: constants.OPEN_MODAL_LOCAL,
    }
}

export const returnModalPost = () => {
    return {
        type: constants.RETURN_MODAL_POST,
    }
}

export const openModalChooseBackground = () => {
    return {
        type: constants.OPEN_MODAL_CHOOSE_BACKGROUND
    }
}

export const openModalImageVideoEdit = () => {
    return {
        type: constants.OPEN_MODAL_IMAGE_VIDEO_EDIT
    }
}