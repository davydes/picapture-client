import * as constants from './constants';

export function loginRequest(credentials) {
  return {
    type: constants.USER_LOGIN_REQUESTED,
    credentials,
  };
}

export function loginSuccess(response) {
  return {
    type: constants.USER_LOGIN_SUCCEEDED,
    token: response.token,
  };
}

export function loginFail(message) {
  return {
    type: constants.USER_LOGIN_FAILED,
    message,
  };
}
