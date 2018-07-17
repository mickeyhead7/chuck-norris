import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ErrorText = ({ error }) => error ? (
  <div className="error">
    {error}
  </div>
) : null;

ErrorText.propTypes = {
  error: PropTypes.string
};

export default ErrorText;
