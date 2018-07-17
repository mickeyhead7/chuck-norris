import { compose, filter, prepend, prop } from 'ramda';
import { ADD_JOKE, ADD_JOKE_FAILED, JOKE_ADDED } from '../actions/jokes';

export const defaultState = {
  error: null,
  inProgress: false,
  jokes: [],
};

const selector = prop('jokes');

export const errorSelector = compose(selector, prop('error'));

export const jokesSelector = compose(selector, prop('jokes'));

export const inProgressSelector = compose(selector, prop('inProgress'));

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
        error: 'There was a problem getting the joke :( Please try again later',
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

