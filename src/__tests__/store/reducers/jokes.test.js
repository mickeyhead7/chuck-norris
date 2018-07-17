import { ADD_JOKE, JOKE_ADDED, ADD_JOKE_FAILED } from '../../../store/actions/jokes';
import jokesReducer, 
  { 
    defaultState,
    errorSelector,
    jokesSelector,
    inProgressSelector,
    addJokeErrorText
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

  test(`${ADD_JOKE} should set the inProgress states`, () => {
    const state = jokesReducer(testState, { type: ADD_JOKE });
  
    expect(state.error).toBeNull();
    expect(state.inProgress).toBeTruthy();
  });

  test(`${JOKE_ADDED} should set the jokes and inProgress states`, () => {
    const state = jokesReducer(testState, { type: JOKE_ADDED });
  
    expect(state.error).toBeNull();
    expect(state.error).toBeFalsy();
  });

  test(`${ADD_JOKE_FAILED} should set the error and inProgress states`, () => {
    const state = jokesReducer(testState, { type: ADD_JOKE_FAILED });
  
    expect(state.error).toBe(addJokeErrorText);
    expect(state.inProgress).toBeFalsy();
  });
});
