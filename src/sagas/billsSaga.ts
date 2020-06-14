import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as api from '../services/index';
import { actionTypes, actions } from '../store/reducers/billsReducer';

function* fetchBills() {
  try {
    const bills = yield call(api.fetchBills);
    yield put(actions.fetchSuccess(bills));
  } catch (e) {
    yield put(actions.fetchFail(e.msg));
  }
}

export default function* billsSaga() {
  yield all([takeEvery(actionTypes.FETCH_ACTION, fetchBills)]);
}
