import {  useState } from "react";
import PropTypes from 'prop-types';
import { Modal } from "components/Modal/Modal";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
    
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        return setShowModal(prevState => !prevState);
    }

    return (
         <GalleryItem>
                <GalleryItemImage src={webformatURL} alt={tags} onClick={toggleModal}/>
                {showModal &&
                    <Modal onClose={toggleModal}>
                     <img src={largeImageURL} alt={tags} />
                   </Modal>}
         </GalleryItem>
            
        )
}

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
};