/// <reference path="../../index.d.ts"/>

import Vue from 'vue'
import Vuex, {MutationTree} from 'vuex'
import EnvironmentUtility from "../../utility/EnvironmentUtility";
import sampleLoadModule from '../module/SampleLoadModule'
import sampleBindModule from '../module/SampleBindModule'
import sampleModalModule from '../module/SampleModalModule'

const NAMESPACE = 'main';
const NAMESPACE_ACTION = `${NAMESPACE}/a/`
const NAMESPACE_GETTER = `${NAMESPACE}/g/`
const NAMESPACE_MUTATION = `${NAMESPACE}/m/`

Vue.use(Vuex)

export const ActionKey = {
}

export const GetterKey = {
}

export const MutationKey = {
}

export class MainState {
    public sampleLoad
    public sampleBind
    public sampleModal
}

function createStore():any{
    const mutations = {
    } as MutationTree<MainState>

    return new Vuex.Store<MainState>({
        state: new MainState(),
        mutations,
        strict: EnvironmentUtility.isDevelopment(),
        modules:{
            sampleLoad:sampleLoadModule,
            sampleBind:sampleBindModule,
            sampleModal:sampleModalModule,
        }
    })
}

export default createStore()