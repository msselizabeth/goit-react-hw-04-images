
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageList } from "./ImageGallery.styled";


export const ImageGallery = ({images}) => {

    return (
        <ImageList>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />
            ))}
        </ImageList>
    );
   

       
}

    
ImageGallery.propTypes = {
    searchImage: PropTypes.string,
};
    
