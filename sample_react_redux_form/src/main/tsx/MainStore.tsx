import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import {testReducer} from 'reducers/tests/TestReducer'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const reducers = {
    testReducer: testReducer,
    form: formReducer
}

export default createStore(
    combineReducers(reducers),
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
