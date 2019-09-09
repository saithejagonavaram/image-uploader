import React,{ Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
class ImageTile extends Component{

    render(){
       
        let { name, image_url } = this.props.data;
        let { deleteImage, editImage } = this.props;

        return(
            <React.Fragment>

                <div className="image-tile--wrapper">
                    <div className="image-tile--name">
                    {name}
                    </div>
                    <div className="image-tile--content" >
                        <img src={image_url} />

                        <div className="image-tile--overlay">
                            <span className="image--edit" onClick={() => editImage()}>
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                            <span className="image--delete" onClick={() => deleteImage() }>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                          
                        </div>

                    </div>
                </div>
       
            </React.Fragment>

        )
    }

}


export default ImageTile;