/// <reference path="../../index.d.ts"/>

import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";
import SampleAPI from "../../network/api/SampleAPI";
import {SampleEntity} from "../../network/entity/SampleEntity";
import {MainState} from "../store/MainStore";
import {Sample2Parameter} from "../../network/parameter/Sample2Parameter";
import {Sample2Entity} from "../../network/entity/Sample2Entity";

const NAMESPACE = 'sample-load';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
    LOAD_MESSAGE: `${NAMESPACE_ACTION}LOAD_MESSAGE`,
    LOAD_TITLE: `${NAMESPACE_ACTION}LOAD_TITLE`,
}

export const GetterKey = {
}

export const MutationKey = {
    SET_LOAD_MESSAGE: `${NAMESPACE_MUTATION}SET_LOAD_MESSAGE`,
    SET_LOAD_TITLE: `${NAMESPACE_MUTATION}SET_LOAD_TITLE`,
}

function createStore(){
    class State {
        constructor(
            public message: String = null,
            public title: String = null,
        ) { }
    }

    const getters = {
    } as GetterTree<State, MainState>

    const actions = {
        [ActionKey.LOAD_MESSAGE]: ({ commit }) => {
            return SampleAPI.getSample()
                .then((res) =>{
                    commit(MutationKey.SET_LOAD_MESSAGE, res)
                })
                .catch(function(error) {
                    alert(error);
                })
        },
        [ActionKey.LOAD_TITLE]: ({ commit }, p1) => {
            const parameter:Sample2Parameter = {
                abc:p1
            };
            return SampleAPI.getSample2(parameter)
                .then((res) =>{
                    commit(MutationKey.SET_LOAD_TITLE, res)
                })
                .catch(function(error) {
                    alert(error);
                })
        },
    } as ActionTree<State, MainState>

    const mutations = {
        [MutationKey.SET_LOAD_MESSAGE] (state, payload:SampleEntity) {
            state.message = payload.message;
        },
        [MutationKey.SET_LOAD_TITLE] (state, payload:Sample2Entity) {
            state.title = payload.title;
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
