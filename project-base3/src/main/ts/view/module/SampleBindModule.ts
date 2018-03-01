/// <reference path="../../index.d.ts"/>

import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";
import {RootState} from "../store/MainStore";

const NAMESPACE = 'sample-bind';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
    SET_COMMENT: `${NAMESPACE_MUTATION}SET_COMMENT`,
}

function createStore(){
    class State {
        constructor(
            public comment: String = null,
        ) { }
    }

    const getters = {
    } as GetterTree<State, RootState>

    const actions = {
    } as ActionTree<State, never>

    const mutations = {
        [MutationKey.SET_COMMENT] (state, comment:String) {
            state.comment = comment;
        },
    } as MutationTree<State>

    return {
        state: new State(),
        getters,
        actions,
        mutations
    } as ModuleTree<State>
}

export default createStore()
