import React from 'react';
import './style.css';

const ErrorText = ({ error }) => error ? (
  <div className="error">
    {error}
  </div>
) : null;

export default ErrorText;
