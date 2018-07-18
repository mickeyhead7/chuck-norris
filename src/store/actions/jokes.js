export const FETCH_JOKE = 'FETCH_JOKE';

export const FETCH_JOKE_FAILED = 'FETCH_JOKE_FAILED';

export const ADD_JOKE = 'ADD_JOKE';

export const fetchJoke = () => ({
  type: FETCH_JOKE,
});

export const fetchJokeFailed = () => ({
  type: FETCH_JOKE_FAILED
});

export const addJoke = joke => ({
  type: ADD_JOKE,
  joke
});
