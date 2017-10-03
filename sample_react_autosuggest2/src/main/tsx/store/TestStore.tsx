import {takeEvery} from "redux-saga";
import {put} from "redux-saga/effects";

import TestAPI from "../network/api/TestAPI";

const ALIAS = 'test';
const NAMESPACE = `sample/${ALIAS}`;

interface NameEntity {
}

export interface TestGlobalState {
    name:string,
    nameList:NameEntity[];
}

export const ActionType = {
    SET_NAME: `${NAMESPACE}/SET_NAME`,
    FETCH_LIST: `${NAMESPACE}/FETCH_LIST`,
    CLEAR_LIST: `${NAMESPACE}/CLEAR_LIST`,
    SET_LIST: `${NAMESPACE}/SET_LIST`,
}

const initialState:TestGlobalState = {
    name:"",
    nameList:[]
};

interface TargetAction {
    type: string;
    name: string;
    nameList:NameEntity[];
}

export function testReducer(state: TestGlobalState = initialState, action: TargetAction): TestGlobalState {
    //console.log(action.type); //check which action has occurred;
    switch (action.type) {
        case ActionType.SET_NAME:
            return {
                name:action.name,
                nameList:state.nameList,
            };
        case ActionType.CLEAR_LIST:
            return {
                name:state.name,
                nameList:[],
            };
        case ActionType.SET_LIST:
            return {
                name:state.name,
                nameList:action.nameList,
            };
        default:
            return state
    }
}

export class TestAction {
    static setName(name) {
        return {
            type: ActionType.SET_NAME,
            name: name
        }
    }

    static fetchList() {
        return {
            type: ActionType.FETCH_LIST
        }
    }

    static clearList() {
        return {
            type: ActionType.CLEAR_LIST
        }
    }
}

export function* testSaga() {
    yield takeEvery(ActionType.FETCH_LIST, fetchUser);
}

function* fetchUser(action) {
    var res = yield TestAPI.fetchUser();
    var json = yield res.json();

    yield put({
        type: ActionType.SET_LIST,
        nameList: json.records
    });
}