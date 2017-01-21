import {TestActionTypes} from "../../types/tests/TestActionTypes";
import 'whatwg-fetch';

function fetchData() {
    return {
        type: TestActionTypes.FETCH
    };
}

function receiveData(sampleRecordList) {
    return {
        type: TestActionTypes.RECEIVE,
        sampleRecordList: sampleRecordList
    };
}

export function fetchTest() {
    return (dispatch, getState)  => {
        dispatch(fetchData());

        fetch(getState().testReducer.apiUrl).then(res => {
            res.json().then(json => {
                dispatch(receiveData(json.records));
            });
        })
    };
}