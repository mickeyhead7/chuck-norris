import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJoke } from '../../store/actions/jokes';
import { errorSelector, jokesSelector, inProgressSelector } from '../../store/reducers/jokes';
import ErrorText from '../ErrorText';
import Joke from '../Joke';
import Button from '../Button';
import './styles.css';

const Jokes = ({ error, jokes, addJoke, buttonDisabled }) => (
  <div className="jokes">
    <ErrorText error={error} />
    {jokes.map(joke => (
      <Joke key={joke.id} {...joke} />
    ))}
    <Button disabled={buttonDisabled} onClick={addJoke} />
  </div>
);

Jokes.propTypes = {
  error: PropTypes.string,
  jokes: PropTypes.array.isRequired,
  addJoke: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  error: errorSelector(state),
  jokes: jokesSelector(state),
  buttonDisabled: !!inProgressSelector(state)
});

const mapDispatchToProps = dispatch => ({
  addJoke: joke => dispatch(addJoke(joke))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
