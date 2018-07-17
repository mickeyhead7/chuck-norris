import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
