import {TestActionTypes} from "../../types/tests/TestActionTypes";
import {TestGlobalState, SampleRecord} from "../../states/tests/TestGlobalState";

export interface Test6Action {
    type: string;
    sampleRecordList: SampleRecord[];
}

const initialState:TestGlobalState = {
    apiUrl:'http://localhost:3000/webroot/test.json',
    isFetching:false,
    sampleRecordList:[]
};

export function testReducer(state: TestGlobalState = initialState, action: Test6Action): TestGlobalState {
    //console.log(action.type); //check which action has occurred;
    switch (action.type) {
        case TestActionTypes.FETCH:
            return {apiUrl:state.apiUrl, isFetching:true, sampleRecordList: []};
        case TestActionTypes.RECEIVE:
            return {apiUrl:state.apiUrl, isFetching:false, sampleRecordList: action.sampleRecordList};
        default:
            return state
    }
}