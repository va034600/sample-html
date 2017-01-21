import {TestActionTypes} from "../../types/tests/TestActionTypes";

export function fetchList(payload){
    return {
        type: TestActionTypes.USER_FETCH_REQUESTED,
        payload: payload
    }
}