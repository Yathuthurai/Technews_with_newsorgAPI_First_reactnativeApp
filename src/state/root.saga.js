import { all } from "redux-saga/effects";
import requestSaga from "./request.saga";
import newsSaga from "./news/news.saga";

export default function* rootSaga() {
  yield all([requestSaga(), newsSaga()]);
}
