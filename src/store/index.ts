import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';

import rootSaga from '../sagas';
import { BillsState } from './reducers/bills';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export interface AppState {
    bills: BillsState;
}

export default store;
