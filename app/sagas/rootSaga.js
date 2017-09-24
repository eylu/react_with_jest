import { fork } from "redux-saga/effects";
import { watchAuthPost,watchAuthUpdate, watchAuthDelete } from "./auth";

export default function* rootSaga() {
  yield [
    fork(watchAuthPost),
    fork(watchAuthUpdate),
    fork(watchAuthDelete),
  ];
}
