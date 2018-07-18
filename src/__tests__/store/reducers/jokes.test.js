import { FETCH_JOKE, FETCH_JOKE_FAILED, ADD_JOKE } from '../../../store/actions/jokes';
import jokesReducer, 
  { 
    defaultState,
    errorSelector,
    jokesSelector,
    inProgressSelector,
    fetchJokeErrorText
  } from '../../../store/reducers/jokes';

let testState;

beforeEach(() => {
  testState = defaultState;
});

describe('Jokes reducer', () => {
  test('errorSelector', () => {
    const result = errorSelector(testState);

    expect(result).toBe(testState.jokes.error);
  });

  test('jokesSelector', () => {
    const result = jokesSelector(testState);

    expect(result).toBe(testState.jokes.jokes);
  });

  test('inProgressSelector', () => {
    const result = inProgressSelector(testState);

    expect(result).toBe(testState.jokes.inProgress);
  });

  test(`${FETCH_JOKE} should set the inProgress states`, () => {
    const state = jokesReducer(testState, { type: FETCH_JOKE });
  
    expect(state.error).toBeNull();
    expect(state.inProgress).toBeTruthy();
  });

  test(`${ADD_JOKE} should set the jokes and inProgress states`, () => {
    const state = jokesReducer(testState, { type: ADD_JOKE });
  
    expect(state.error).toBeNull();
    expect(state.error).toBeFalsy();
  });

  test(`${FETCH_JOKE_FAILED} should set the error and inProgress states`, () => {
    const state = jokesReducer(testState, { type: FETCH_JOKE_FAILED });
  
    expect(state.error).toBe(fetchJokeErrorText);
    expect(state.inProgress).toBeFalsy();
  });
});
