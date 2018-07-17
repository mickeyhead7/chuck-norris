export const ADD_JOKE = 'ADD_JOKE';

export const ADD_JOKE_FAILED = 'ADD_JOKE_FAILED';

export const JOKE_ADDED = 'JOKE_ADDED';

export const addJoke = joke => ({
  type: ADD_JOKE,
  joke
});

export const addJokeFailed = () => ({
  type: ADD_JOKE_FAILED
});

export const jokeAdded = joke => ({
  type: JOKE_ADDED,
  joke
});
