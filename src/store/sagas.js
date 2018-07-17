import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_JOKE, ADD_JOKE_FAILED, JOKE_ADDED } from './actions/jokes';

function* fetchJoke (action) {
  try {
    const joke = {
      id: 1,
      joke: 'This is a joke'
    };
    yield put({ type: JOKE_ADDED, joke });
  } catch (error) {
    yield put({ type: ADD_JOKE_FAILED });
  }
}

function* saga() {
  yield takeEvery(ADD_JOKE, fetchJoke);
}

export default saga;
