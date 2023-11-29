import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImage } = this.props;

    return (
      <div className={css.container} onClick={this.handleOverlayClick}>
        <div className={css.modalContent}>
          <img className={css.images} src={selectedImage} alt="images" />
        </div>
      </div>
    );
  }
}

export default Modal;
