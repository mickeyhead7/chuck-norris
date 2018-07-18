import { compose, filter, prepend, prop } from 'ramda';
import { FETCH_JOKE, FETCH_JOKE_FAILED, ADD_JOKE } from '../actions/jokes';

export const fetchJokeErrorText = 'There was a problem getting the joke :( Please try again later';

export const defaultState = {
  error: null,
  inProgress: false,
  jokes: [],
};

const selector = prop('jokes');

export const errorSelector = compose(prop('error'), selector);

export const jokesSelector = compose(prop('jokes'), selector);

export const inProgressSelector = compose(prop('inProgress'), selector);

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_JOKE:
      return {
        ...state,
        inProgress: true,
      };

    case FETCH_JOKE_FAILED:
      return {
        ...state,
        error: fetchJokeErrorText,
        inProgress: false
      };
    
    case ADD_JOKE:
      const doesJokeExist = joke => joke.id !== action.joke.id;
      const filteredJokes = filter(doesJokeExist, state.jokes);
      const jokes = prepend(action.joke, filteredJokes);
      
      return {
        ...state,
        jokes,
        error: null,
        inProgress: false
      };

    default: 
      return state;
  }
};

