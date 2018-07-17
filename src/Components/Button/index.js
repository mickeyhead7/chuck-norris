import React from 'react';
import './styles.css';

const Button = ({ onClick }) => (
  <button
    className="button"
    onClick={onClick}
  >
    Get a new joke
  </button>
);

export default Button;
