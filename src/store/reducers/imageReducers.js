

import { UPDATE_IMAGE_DATA ,EDIT_IMAGE_ID, TOGGLE_MODAL} from '../actions/imageActions';

let initialState = {
    imagesData : [],
    currentImageID: null,
    openModal: false,
   
}


const imageReducers = (state=initialState, action) => {

    switch(action.type){
        case UPDATE_IMAGE_DATA:
            return {...state,imagesData:action.payload }
            break;
        case EDIT_IMAGE_ID:
            return {...state,currentImageID:action.payload }
            break;
        case TOGGLE_MODAL:
            return {...state,openModal:action.payload }
             break;
        default:
            return state;

    }

}

export default imageReducers;

