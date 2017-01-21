import {Test6ActionTypes} from "types/tests/Test6ActionTypes";

export function fetchList(payload){
    return {
        type: Test6ActionTypes.USER_FETCH_REQUESTED,
        payload: payload
    }
}