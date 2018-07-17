import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Joke = ({ id, joke }) => (
  <div className="joke">
    {joke}
  </div>
);

Joke.propTypes = {
  id: PropTypes.number.isRequired,
  joke: PropTypes.string.isRequired
};

export default Joke;
