import React,{ PureComponent } from "react";

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import ImageTile from '../components/ImageTile';

import {get} from '../services/api-services';

import {IMAGES_GET_URL} from '../utils/constants';

import * as imageActions from '../store/actions/imageActions';

import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class ModalContainer extends PureComponent{

        constructor(props){
            super(props);

            console.log('props in ModalContainer',this.props);
            this.state= {
                srcImage: null
            }

        }

    onSelectFile = e => {

        console.log('e',e);
        if (e.target.files && e.target.files.length > 0) {

        this.setState({ srcImage: URL.createObjectURL(e.target.files[0]) });

        }
    };


    updateImage = () => {
       console.log('this.props');
        let { updateImageData, toggleModal} = this.props;
        let {currentImageID, imagesData} = this.props;

        let { srcImage } = this.state;

        console.log('imagesData',imagesData);

        imagesData[currentImageID].image_url = srcImage

        updateImageData(imagesData);
        toggleModal(false);

        console.log('imagesData',imagesData);

    }



    render(){
        
        
        let {toggleModal, imagesData, currentImageID} = this.props;
        const { srcImage } = this.state;
        console.log(srcImage);

        let currentImageURL = imagesData[currentImageID].image_url; 

        console.log('this.props', this.props);

        return(

            <React.Fragment>

                <div className="modal--container">

                    <div className="modal--heading">
                    <p>Edit Image</p>
                    <span  onClick={() => toggleModal(false)} className="modal--close">X</span>
                    </div>
                    <div className="modal--wrapper">
                    <div className="original--image-container">
                        <img src={currentImageURL} />
                    </div>

                    <div className="new--image-container">
                        <div className="new--image-wrapper">
                            <img src={srcImage} />
                         
                        </div>
                        
                        <input type="file"  onChange={this.onSelectFile} />

                        <div className="button-container">
                        <button onClick={() => this.updateImage()} > Confirm Image </button>
                        </div>
                    </div>

                    </div>

                </div>
            </React.Fragment>

        )
    }

}

function mapStateToProps(state){
    return { ...state.imagesData}
}

function mapDispatchToProps(dispatch){
    return  {
        updateImageData: (data) => dispatch(imageActions.updateImageData(data)),
        toggleModal: (data) => dispatch(imageActions.toggleModal(data))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer);