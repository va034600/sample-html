/// <reference path="../index.d.ts"/>

import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";
import SampleAPI from "../network/api/SampleAPI";
import {SampleEntity} from "../network/entity/SampleEntity";
import {RootState} from "../store/MainStore";

const NAMESPACE = 'sample';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
    LOAD: `${NAMESPACE_ACTION}LOAD`,
}

export const GetterKey = {
}

export const MutationKey = {
    SET_DATA: `${NAMESPACE_MUTATION}SET_DATA`,
    SET_TITLE: `${NAMESPACE_MUTATION}SET_TITLE`,
}

function createStore(){
    class State {
        constructor(
            public message: String = null,
            public title: String = null,
        ) { }
    }

    const getters = {
    } as GetterTree<State, RootState>

    const actions = {
        [ActionKey.LOAD]: ({ commit }) => {
            return SampleAPI.getSample()
                .then((res) =>{
                    commit(MutationKey.SET_DATA, res)
                })
                .catch(function(error) {
                    alert(error);
                })
        },
    } as ActionTree<State, never>

    const mutations = {
        [MutationKey.SET_DATA] (state, payload:SampleEntity) {
            state.message = payload.message;
        },
        [MutationKey.SET_TITLE](state, value){
            state.title = value;
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
