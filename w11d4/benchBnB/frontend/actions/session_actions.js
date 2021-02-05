import { login, logout, signup } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

/**
login(user) (thunk action creator)
logout() (thunk action creator)
signup(user) (thunk action creator)
receiveCurrentUser(currentUser) (regular action creator)
logoutCurrentUser() (regular action creator)
receiveErrors(errors) (regular action creator)
 */

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user 
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,

  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

// thunk actions
export const loginUser = (user) => dispatch => {
  return login(user).then((user) => dispatch(receiveCurrentUser(user)));
}

export const signupUser = (user) => dispatch => {
  return signup(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const logoutUser = () => dispatch => {
  return logout().then(() => dispatch(logoutCurrentUser()));
}
