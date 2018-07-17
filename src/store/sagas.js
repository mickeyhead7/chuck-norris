import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_JOKE, ADD_JOKE_FAILED, JOKE_ADDED } from './actions/jokes';
import * as api from '../helpers/api';

export function* fetchJoke () {
  try {
    const joke = yield call(api.fetchJoke);
    
    yield put({ type: JOKE_ADDED, joke });
  } catch (error) {
    yield put({ type: ADD_JOKE_FAILED });
  }
}

function* saga() {
  yield takeEvery(ADD_JOKE, fetchJoke);
}

export default saga;
