import {Test6ActionTypes} from "types/tests/Test6ActionTypes";
import 'whatwg-fetch';

function fetchData() {
    return {
        type: Test6ActionTypes.FETCH
    };
}

function receiveData(sampleRecordList) {
    return {
        type: Test6ActionTypes.RECEIVE,
        sampleRecordList: sampleRecordList
    };
}

export function fetchTest() {
    return (dispatch, getState)  => {
        dispatch(fetchData());

        fetch(getState().test6Reducer.apiUrl).then(res => {
            res.json().then(json => {
                dispatch(receiveData(json.records));
            });
        })
    };
}