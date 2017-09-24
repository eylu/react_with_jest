import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { push, goBack } from "react-router-redux";

import { authAPI } from "../api";
import setAuthorizationToken from "../utils/setAuthorizationToken"
/**
 *  watch auth post 
 *
 */
export function* watchAuthPost() {
  yield takeEvery("SET_CURRENT_USER", authPost);
}

function* authPost(action) {
 yield authReq(authPostApi,action.payload)
}

function authPostApi({data}) {
  const timestamp = (new Date()).valueOf();
  return axios({
    method:"post",
    url:authAPI(),
    auth: data,
    data:{
      "scopes": [
          "public_repo",
      ],
      "note": `test${timestamp}`,
      "fingerprint": timestamp,
    },
  })
  .then(response => ({
    response:response.data
  }))
  .catch(error => ({
    error,
  }));
}

/**
 *  watch auth update 
 *
 */
export function* watchAuthUpdate() {
  yield takeEvery("UPDATE_CURRENT_USER", authUpdate);
}

function* authUpdate(action) {
  yield authReq(authUpdateApi,action.payload)
}

function authUpdateApi({id}) {
  return axios
  .get(authAPI(id))
  .then(response => ({
    response:response.data
  }))
  .catch(error => ({
    error,
  }));
}

/**
 *  watch auth delete 
 *
 */
export function* watchAuthDelete() {
  yield takeEvery("DEL_CURRENT_USER", authDelete);
}

function* authDelete(action) {
  yield [
      put({ type: "DELETE_CURRENT_USER_SUCCESS", response:{id:action.payload.id}}),
      put({ type: "DEL_STORAGE",
            payload: { key: "token"},
          }),
      put({ type: "DEL_STORAGE",
            payload: { key: "userId"},
          }),
      put(push("/login"))
    ]
}

// function authDeleteApi({id}) {
//   return axios
//   .delete(authAPI(id))
//   .then(response => ({
//     response:response.data
//   }))
//   .catch(error => ({
//     error,
//   }));
// }

function* authReq(fn, payload) {
  yield put({ type: "SET_CURRENT_USER_LOADING" });
  const { response, error } = yield call(fn, payload);
  if (response) {
    setAuthorizationToken(response.token)
    yield [
      put({ type: "SET_CURRENT_USER_SUCCESS", response }),
      put({ type: "SET_STORAGE",
            payload: { key: "token", value: response.token },
          }), 
      put({ type: "SET_STORAGE",
            payload: { key: "userId", value: response.id },
          }),
      put(push("/list"))
    ]
  } else {
    yield put({
      type: "SET_CURRENT_USER_FAILTURE",
      payload: {
        error
      },
    });
  }
}
