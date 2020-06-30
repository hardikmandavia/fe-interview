import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as api from '../services/index';
import { actionTypes, UpdateAction } from '../store/actions/bills';

function* fetchBills() {
    try {
        const bills = yield call(api.fetchBills);
        yield put({ type: actionTypes.FETCH_SUCCESS, data: bills });
    } catch (e) {
        yield put({ type: actionTypes.FETCH_SUCCESS, error: e.msg });
    }
}

function* updateBills(action: UpdateAction) {
    try {
        const response = yield call(api.updateBill, action.data);
        yield put({ type: actionTypes.UPDATE_SUCCESS, data: response.data });
    } catch (e) {
        yield put({ type: actionTypes.UPDATE_SUCCESS, error: e.msg });
    }
}

export default function* billsSaga() {
    yield all([takeEvery(actionTypes.FETCH_ACTION, fetchBills)]);
    yield all([takeEvery(actionTypes.UPDATE_ACTION, updateBills)]);
}
