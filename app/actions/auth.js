import { authAPI } from '../api';

export function setCurrentUser(data) {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      data
    }
  };
}

export function updateCurrentUser(id) {
  return {
    type: "UPDATE_CURRENT_USER",
    payload:{id}
  };
}

export function delCurrentUser(id) {
  return {
    type: "DEL_CURRENT_USER",
    payload: {
      id
    }
  };
}