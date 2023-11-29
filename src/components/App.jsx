import React, { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { getPicturesSearch } from '../api/pictures';

class App extends Component {
  state = {
    isLoading: false,
    error: '',
    pictures: [],
    query: '',
    showModal: false,
    selectedImage: null,
    isShowPictures: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handlePictures();
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = selectedImage => {
    this.setState({ selectedImage, showModal: true });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handlePictures = async () => {
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await getPicturesSearch(
        this.state.query,
        this.state.page
      );
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        error: '',
        isShowPictures: totalHits > prevState.pictures.length,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = ({ query }) => {
    this.setState({ query, pictures: [], page: 1, isShowPictures: true });
  };

  render() {
    const { error, pictures, isShowPictures, showModal, selectedImage } =
      this.state;

    return (
      <div className={css.App}>
        <Searchbar submit={this.handleSubmit} />

        {pictures && pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            onLoadMore={this.handleClick}
            onImageClick={this.handleImageClick}
          />
        )}
        {error && <h1>{error}</h1>}
        <Loader isLoading={this.state.isLoading} />
        {!this.state.isLoading && isShowPictures && (
          <Button onClick={this.handleClick} isVisible={isShowPictures} />
        )}

        {showModal && (
          <Modal selectedImage={selectedImage} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
