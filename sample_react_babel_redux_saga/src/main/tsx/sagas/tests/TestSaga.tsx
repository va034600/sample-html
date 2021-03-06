import {call, put} from "redux-saga/effects";
import {takeEvery} from "redux-saga";
import {TestActionTypes} from "../../types/tests/TestActionTypes";

class Api{
    static fetchUser(){
        return fetch("http://localhost:3000/webroot/test.json", {method: 'GET'})
    }

    static fetchUser2(): Promise<void> {
        return new Promise<void>(resolve => {
            fetch("http://localhost:3000/webroot/test.json").then(res => {
                res.json().then(json => {
                    resolve(json);
                });
            })
            ;
        });
    }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        // const sampleRecordList = yield call(Api.fetchUser, action.payload);
        var sampleRecordList = yield call(Api.fetchUser2);
        sampleRecordList = sampleRecordList.records;

        yield put({type: TestActionTypes.USER_FETCH_SUCCEEDED, sampleRecordList: sampleRecordList});
    } catch (e) {
        yield put({type: TestActionTypes.USER_FETCH_FAILED, message: e.message});
    }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function* mySaga() {
    // alert("mySaga USER_FETCH_REQUESTED");
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
// function* mySaga() {
//     // alert("mySaga USER_FETCH_REQUESTED");
//     yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;