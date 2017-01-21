import {Test6ActionTypes} from "types/tests/Test6ActionTypes";
import {Test6GlobalState, SampleRecord} from "states/tests/Test6GlobalState";

export interface Test6Action {
    type: string;
    sampleRecordList: SampleRecord[];
}

const initialState:Test6GlobalState = {
    apiUrl:'http://localhost:3000/webroot/test.json',
    isFetching:false,
    sampleRecordList:[]
};

export function test6Reducer(state: Test6GlobalState = initialState, action: Test6Action): Test6GlobalState {
    //console.log(action.type); //check which action has occurred;
    switch (action.type) {
        case "USER_FETCH_REQUESTED":
            return {apiUrl:state.apiUrl, isFetching:true, sampleRecordList: state.sampleRecordList};
        case "USER_FETCH_SUCCEEDED":
            return {apiUrl:state.apiUrl, isFetching:false, sampleRecordList: action.sampleRecordList};
        default:
            return state
    }
}