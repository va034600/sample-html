import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import {test6Reducer} from 'reducers/tests/TestReducer'
import mySaga from 'sagas/tests/TestSaga'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    combineReducers({
        test6Reducer
    }),
    // window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(mySaga)
