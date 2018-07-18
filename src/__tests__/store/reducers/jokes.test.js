import { FETCH_JOKE, FETCH_JOKE_FAILED, ADD_JOKE } from '../../../store/actions/jokes';
import jokesReducer, 
  { 
    defaultState,
    errorSelector,
    jokesSelector,
    inProgressSelector,
    fetchJokeErrorText
  } from '../../../store/reducers/jokes';

const joke = {
  id: 1,
  joke: 'foo'
};

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

  test(`${FETCH_JOKE_FAILED} should set the error and inProgress states`, () => {
    const state = jokesReducer(testState, { type: FETCH_JOKE_FAILED });
  
    expect(state.error).toBe(fetchJokeErrorText);
    expect(state.inProgress).toBeFalsy();
  });

  test(`${ADD_JOKE} should set the jokes and inProgress states`, () => {
    const state = jokesReducer(testState, { type: ADD_JOKE, joke });
  
    expect(state.error).toBeNull();
    expect(state.inProgress).toBeFalsy();
    expect(state.jokes).toEqual([ joke ]);
  });

  test(`${ADD_JOKE} should not duplicate jokes`, () => {
    const state = jokesReducer(testState, { type: ADD_JOKE, joke });
    const nextState = jokesReducer(state, { type: ADD_JOKE, joke });
  
    expect(nextState.jokes).toEqual([ joke ]);
  });
});
