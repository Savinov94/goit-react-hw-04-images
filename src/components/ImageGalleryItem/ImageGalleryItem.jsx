import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, picture, onImageClick }) => {
  return (
    <li className={css.item} onClick={onImageClick}>
      <img
        className={css.img}
        type="images"
        src={picture}
        alt={`gallery-item-${id}`}
      />
    </li>
  );
};

export default ImageGalleryItem;
