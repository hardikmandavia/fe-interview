import { applyMiddleware, combineReducers, createStore } from 'redux';
import * as reducers from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store;
