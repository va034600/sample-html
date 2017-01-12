import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import {test6Reducer} from 'reducers/tests/Test6Reducer'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default createStore(
    combineReducers({
        test6Reducer
    }),
    // window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
