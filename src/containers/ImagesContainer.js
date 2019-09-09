import React,{ Component } from "react";

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import ModalContainer from './ModalContainer';

import ImageTile from '../components/ImageTile';

import {get} from '../services/api-services';

import {IMAGES_GET_URL} from '../utils/constants';

import * as imageActions from '../store/actions/imageActions';

class ImagesContainer extends Component{

        constructor(props){
            super(props);

            console.log('props in ImagesContainer',this.props);

    
        }

    componentDidMount = async() => {
        let { updateImageData } = this.props;
        let data = await get(IMAGES_GET_URL);
        console.log('imagesData',data);
        updateImageData(data);
    }

    deleteImage = (imageID) =>{
        console.log('in delete',imageID);

        let { updateImageData } = this.props;
        let {imagesData} = this.props.imagesData;
      

        let data = imagesData.filter((image,index)=> { return index!=imageID });
        console.log('imagesData',imagesData);

        updateImageData(data);

    }

    updateImage = (imageID) => {
        let { editImageID,toggleModal}  = this.props;
        console.log('in updateImage',imageID);

        editImageID(imageID);   
        toggleModal(true);   
    }



    render(){
        console.log('imageActions',imageActions);
        console.log('props in ImagesContainer',this.props);
        let { imagesData, openModal } = this.props.imagesData;

        return(

            <React.Fragment>

                <div className="images--container">
                    {imagesData.map((image,index) => (

                    < ImageTile key={index}  deleteImage={()=>this.deleteImage(index)} editImage={()=> this.updateImage(index)} data={image}  />

                    )   )}
                </div>

               {openModal &&  <ModalContainer   />}  
            </React.Fragment>

        )
    }

}

function mapStateToProps(state){
    return { ...state}
}

function mapDispatchToProps(dispatch){
    return  {
        updateImageData: (data) => dispatch(imageActions.updateImageData(data)),
        editImageID: (data) => dispatch(imageActions.editImageId(data)),
        toggleModal: (data) => dispatch(imageActions.toggleModal(data))

    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ImagesContainer);