import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "components/getImages";
import { Circles } from 'react-loader-spinner';
import { Button } from "components/Button/Button";
import { Searchbar } from "./Searchbar/Searchbar";

export const App = () => {
  

  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
    
useEffect(() => {
    if (imageName === '') {
      return;
    }

    setStatus('pending');

    getImages(imageName, page)
      .then(response => {
        if (!response.ok) return Promise.reject('Error');
        return response.json()
      })
      .then(newImages => {
        setImages(prev => [...prev, ...newImages.hits])
      })
      .catch(error => {
        console.error(error.message)
      })
      .finally(() => {
        setStatus('resolved')
      });

  }, [imageName, page]);

  const handleFormSubmit = pictureName => {
    if (imageName !== pictureName) {
      setImages([]);
      setPage(1);
      
    }
     setImageName(pictureName);

  }
   const onMoreBtnClick = () => {
        setPage(prev => prev + 1);
        setStatus('pending');
    }
  
  return (
    <div>
    <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      {status === 'pending' && <Circles
                      visible={true}
                      height="80"
                      width="80"
                      color="DEFAULT_COLOR"
                      ariaLabel="circles-loading"
                      wrapperStyle={{ marginLeft: 'calc(100% / 2.2)' }}
                      wrapperClass='circles-wrapper'/>
    }
    {status === 'resolved' && <Button type="button" onClick={onMoreBtnClick}>Load more...</Button>}
    <Toaster/>
    </div>)
}
