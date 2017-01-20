import {Test6ActionTypes} from "types/tests/Test6ActionTypes";
import 'whatwg-fetch';

export function receiveData(sampleRecordList) {
    return {
        type: Test6ActionTypes.RECEIVE,
        sampleRecordList: sampleRecordList
    };
}
