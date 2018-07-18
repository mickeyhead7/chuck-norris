import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../helpers/api';
import { fetchJokeFailed, addJoke } from '../../store/actions/jokes';
import { fetchJokeFromAPI } from '../../store/sagas';

const joke = {
  id: 1,
  joke: 'foo'
};

describe('', () => {
  const gen = fetchJokeFromAPI(joke);

  test('A joke is fetched via the api', () => {
    expect(gen.next().value).toEqual(call(api.fetchJoke));
  });

  it('The addJoke action is called', () => {
    const value = gen.next(joke).value;

    expect(value).toEqual(
      put(
        addJoke(joke)
      )
    );
  });

  it('Throws an error if the API fails', () => {
    let value = gen.throw().value;

    expect(value).toEqual(put(fetchJokeFailed()));
  });
});
