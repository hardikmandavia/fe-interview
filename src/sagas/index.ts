import { all } from 'redux-saga/effects';

import bills from './billsSaga';

export default function* rootSaga() {
  yield all([
    bills()
  ]);
}