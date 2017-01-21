import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware from 'redux-saga';

import {testReducer} from 'reducers/tests/TestReducer'
import mySaga from 'sagas/tests/TestSaga'

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
    sagaMiddleware.run(mySaga);
    return store;
}
