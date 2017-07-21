/// <reference path="../index.d.ts"/>

import Vue from 'vue'
import Vuex, {MutationTree} from 'vuex'
Vue.use(Vuex)
import EnvironmentUtility from "../utility/EnvironmentUtility";
import sampleModule from '../module/SampleModule'

const NAMESPACE = 'main';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
}

export class RootState {
    constructor(
        public sample,
    ) { }
}

function createStore():any{
    class State {
        constructor(
        ) { }
    }

    const mutations = {
    } as MutationTree<State>

    return new Vuex.Store<State>({
        state: new State(),
        mutations,
        strict: EnvironmentUtility.isDevelopment(),
        modules:{
            sample:sampleModule,
        }
    })
}

export default createStore()