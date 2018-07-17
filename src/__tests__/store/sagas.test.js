import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../helpers/api';
import { jokeAdded, addJokeFailed } from '../../store/actions/jokes';
import { fetchJoke } from '../../store/sagas';

const joke = {
  id: 1,
  joke: 'foo'
};

describe('', () => {
  const gen = fetchJoke(joke);

  test('A joke is fetched via the api', () => {
    expect(gen.next().value).toEqual(call(api.fetchJoke));
  });

  it('The addJoke action is called', () => {
    const value = gen.next(joke).value;

    expect(value).toEqual(
      put(
        jokeAdded(joke)
      )
    );
  });

  it('Throws an error if the API fails', () => {
    let value = gen.throw().value;

    expect(value).toEqual(put(addJokeFailed()));
  });
});
