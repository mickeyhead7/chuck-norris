import React from 'react';
import './styles.css';

const Joke = ({ id, joke }) => (
  <div className="joke">
    {joke}
  </div>
);

export default Joke;
