import React from 'react';
import { connect } from 'react-redux';
import { addJoke } from '../../store/actions/jokes';
import { errorSelector, jokesSelector, inProgressSelector } from '../../store/reducers/jokes';
import Joke from '../Joke';
import Button from '../Button';
import './styles.css';

const Jokes = ({ jokes, addJoke, buttonDisabled }) => (
  <div className="jokes">
    {jokes.map(joke => (
      <Joke key={joke.id} {...joke} />
    ))}
    <Button disabeld={buttonDisabled} onClick={addJoke} />
  </div>
);

const mapStateToProps = state => {
  return {
    error: errorSelector(state),
    jokes: jokesSelector(state),
    buttonDisabled: !!inProgressSelector(state)
  };
};

const mapDispatchToProps = dispatch => ({
  addJoke: joke => dispatch(addJoke(joke))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
