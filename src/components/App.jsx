import { useState, useEffect } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { getPicturesSearch } from '../api/pictures';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isShowPictures, setIsShowPictures] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
  const handlePictures = async () => {
    try {
      setIsLoading(true);
      const { hits, totalHits } = await getPicturesSearch(query, page);
      setPictures((prevPictures) => [...prevPictures, ...hits]);
      setError('');
      setIsShowPictures(totalHits > pictures.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (query !== '' || page !== 1) {
    handlePictures();
  }
}, [query, page]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (selectedImage) => {
    setSelectedImage(selectedImage);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleSubmit = ({ query }) => {
    setQuery(query);
    setPictures([]);
    setPage(1);
    setIsShowPictures(true);
  };

  return (
    <div className={css.App}>
      <Searchbar submit={handleSubmit} />

      {pictures && pictures.length > 0 && (
        <ImageGallery
          pictures={pictures}
          onLoadMore={handleClick}
          onImageClick={handleImageClick}
        />
      )}
      {error && <h1>{error}</h1>}
      <Loader isLoading={isLoading} />
      {!isLoading && isShowPictures && (
        <Button onClick={handleClick} isVisible={isShowPictures} />
      )}

      {showModal && (
        <Modal selectedImage={selectedImage} onClose={toggleModal} />
      )}
    </div>
  );
};

export default App;