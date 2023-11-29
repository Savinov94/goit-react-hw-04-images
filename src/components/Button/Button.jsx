import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick, isVisible }) => {
  return (
    <button
      className={css.button}
      onClick={onClick}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Load more
    </button>
  );
};

export default Button;
