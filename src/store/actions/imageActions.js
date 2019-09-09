export const UPDATE_IMAGE_DATA = 'UPDATE_IMAGE_DATA';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const EDIT_IMAGE_ID = 'EDIT_IMAGE_ID';

export const  updateImageData = (data) => {

    return {
            type:UPDATE_IMAGE_DATA,
            payload: data
        }
    
}

export const toggleModal = (data) => {
    return {
        type:TOGGLE_MODAL,
        payload: data
    }
}

export const editImageId = (data) => {
    return {
        type:EDIT_IMAGE_ID,
        payload: data
    }
}


