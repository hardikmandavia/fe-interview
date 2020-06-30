import { all } from 'redux-saga/effects';

import bills from './bills';

export default function* rootSaga() {
    yield all([bills()]);
}
