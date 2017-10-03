import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware from 'redux-saga';

import {testReducer, testSaga} from "./store/TestStore";

export function createMainStore(): Store<any> {
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore<any>(
        combineReducers({
            testReducer
        }),
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(testSaga);
    return store;
}
