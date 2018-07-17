import { compose, filter, prepend, prop } from 'ramda';
import { ADD_JOKE, ADD_JOKE_FAILED, JOKE_ADDED } from '../actions/jokes';

export const addJokeErrorText = 'There was a problem getting the joke :( Please try again later';

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
    case ADD_JOKE:
      return {
        ...state,
        inProgress: true,
      };

    case ADD_JOKE_FAILED:
      return {
        ...state,
        error: addJokeErrorText,
        inProgress: false
      };
    
    case JOKE_ADDED:
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

