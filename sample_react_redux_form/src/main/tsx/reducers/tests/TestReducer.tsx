import {TestActionTypes} from "../../types/tests/TestActionTypes";
import {TestGlobalState} from "../../states/tests/TestGlobalState";

export interface TestAction {
    type: string;
    // data:any;
    firstName:string;
    // lastName?:string;
    // email?:string;
}

const initialState:TestGlobalState = {
    firstName:"ok va"
    // lastName:null,
    // email:null
};

export function test6Reducer(state: TestGlobalState = initialState, action: TestAction): TestGlobalState {
    console.log(action.type);
    switch (action.type) {
        case 'redux-form-examples/account/LOAD':
            return {
                firstName:action.firstName
            }
        case "FETCH":
            return state;
        default:
            return state
    }
}