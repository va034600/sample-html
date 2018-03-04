/// <reference path="../../index.d.ts"/>

import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";
import {MainState} from "../store/MainStore";

const NAMESPACE = 'sample-modal';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
    SET_SHOWN: `${NAMESPACE_MUTATION}SET_SHOWN`,
}

function createStore(){
    class State {
        constructor(
            public shown: Boolean = false,
        ) { }
    }

    const getters = {
    } as GetterTree<State, MainState>

    const actions = {
    } as ActionTree<State, MainState>

    const mutations = {
        [MutationKey.SET_SHOWN] (state, value) {
            state.shown = value;
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
