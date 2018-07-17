import React from 'react';
import './styles.css';

const Button = ({ disabled, onClick }) => (
  <button
    className="button"
    disabled={disabled}
    onClick={onClick}
  >
    Get a new joke
  </button>
);

export default Button;
