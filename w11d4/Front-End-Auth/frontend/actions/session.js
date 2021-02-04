import { postUser, postSession, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const createNewUser = (formUser) => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = (formUser) => dipatch => {
  return postSession(formUser)
    .then(user => dipatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
  return deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
}
