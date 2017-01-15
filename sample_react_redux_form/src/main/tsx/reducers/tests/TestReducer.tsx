import {TestActionTypes} from "../../types/tests/TestActionTypes";
import {TestGlobalState} from "../../states/tests/TestGlobalState";

export interface TestAction {
    type: string;
    data:any;
    // firstName?:string;
    // lastName?:string;
    // email?:string;
}

const initialState:TestGlobalState = {
    // firstName:null,
    // lastName:null,
    // email:null
};

export function test6Reducer(state: TestGlobalState = initialState, action: TestAction): TestGlobalState {
    console.log(action.type);
    switch (action.type) {
        case 'redux-form-examples/account/LOAD':
            console.log(action.data);
            return {
                data: action.data
            }
        case "FETCH":
            return state;
        default:
            return state
    }
}