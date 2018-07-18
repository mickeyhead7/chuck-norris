import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJoke } from '../../store/actions/jokes';
import { errorSelector, jokesSelector, inProgressSelector } from '../../store/reducers/jokes';
import ErrorText from '../ErrorText';
import Joke from '../Joke';
import Button from '../Button';
import './styles.css';

export const Jokes = ({ error, jokes, fetchJoke, buttonDisabled }) => (
  <div className="jokes">
    <ErrorText error={error} />
    {jokes.map(joke => (
      <Joke key={joke.id} {...joke} />
    ))}
    <Button disabled={buttonDisabled} onClick={fetchJoke} />
  </div>
);

Jokes.propTypes = {
  error: PropTypes.string,
  jokes: PropTypes.array.isRequired,
  fetchJoke: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  error: errorSelector(state),
  jokes: jokesSelector(state),
  buttonDisabled: !!inProgressSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchJoke: joke => dispatch(fetchJoke(joke))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
