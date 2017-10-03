import {TestGlobalState} from "../../states/tests/TestGlobalState";

export interface Test6Action {
    type: string;
}

const initialState:TestGlobalState = {
};

export function testReducer(state: TestGlobalState = initialState, action: Test6Action): TestGlobalState {
    //console.log(action.type); //check which action has occurred;
    switch (action.type) {
        default:
            return state
    }
}