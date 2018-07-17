import React from 'react';
import Joke from '../Joke';
import Button from '../Button';
import './styles.css';

const jokes = [
  {
    id: 1,
    joke: 'This is a joke :)'
  },
  {
    id: 2,
    joke: 'This is a another joke :|'
  }
];

const Jokes = () => (
  <div className="jokes">
    {jokes.map(joke => (
      <Joke key={joke.id} {...joke} />
    ))}
    <Button onClick={() => {}} />
  </div>
);

export default Jokes;
