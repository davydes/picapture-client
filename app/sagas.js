import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as actions from './actions';
import { USER_LOGIN_REQUESTED } from './constants';
import Api from './api';

function* loginUser(action) {
  try {
    const response = yield call(Api.loginUser, action.credentials);
    yield put(actions.loginSuccess(response));
  } catch (e) {
    yield put(actions.loginFail(e.message));
  }
}

function* rootSaga() {
  yield takeEvery(USER_LOGIN_REQUESTED, loginUser);
}

export default [
  rootSaga,
];
