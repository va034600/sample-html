import {TestActionTypes} from "../../types/tests/TestActionTypes";
import {TestGlobalState} from "../../states/tests/TestGlobalState";

export interface TestAction {
    type: string;
    firstName?:string;
    lastName?:string;
    email?:string;
}

const initialState:TestGlobalState = {
    firstName:null,
    lastName:null,
    email:null
};

export function test6Reducer(state: TestGlobalState = initialState, action: TestAction): TestGlobalState {
    // console.log(action.firstName);
    switch (action.type) {
        default:
            return state
    }
}