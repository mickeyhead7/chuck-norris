import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_JOKE, FETCH_JOKE_FAILED, ADD_JOKE } from './actions/jokes';
import * as api from '../helpers/api';

export function* fetchJokeFromAPI () {
  try {
    const joke = yield call(api.fetchJoke);
    
    yield put({ type: ADD_JOKE, joke });
  } catch (error) {
    yield put({ type: FETCH_JOKE_FAILED });
  }
}

function* saga() {
  yield takeEvery(FETCH_JOKE, fetchJokeFromAPI);
}

export default saga;
