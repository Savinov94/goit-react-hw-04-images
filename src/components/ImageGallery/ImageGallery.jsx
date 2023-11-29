import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul className={css.list}>
      {pictures &&
        pictures.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            id={picture.id}
            picture={picture.webformatURL}
            onImageClick={() => onImageClick(picture.largeImageURL)}
          />
        ))}
    </ul>
  );
};

export default ImageGallery;
