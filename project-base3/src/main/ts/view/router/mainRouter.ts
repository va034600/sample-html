import VueRouter from 'vue-router'

import {SampleComponent} from "../component/SampleComponent";
import {PageNotFoundComponent} from "../component/PageNotFoundComponent";
import {SampleButtonComponent} from "../component/SampleButtonComponent";
import {SampleParameterComponent} from "../component/SampleParameterComponent";
import {SampleBindComponent} from "../component/SampleBindComponent";
import {SampleLoadComponent} from "../component/SampleLoadComponent";
import {SampleModalButtonComponent} from "../component/SampleModalButtonComponent";
import {SampleColumnComponent} from "../component/SampleColumnComponent";
import EnvironmentUtility from "../../utility/EnvironmentUtility";

const ROOT_PATH = EnvironmentUtility.isDevelopment() ? "/" : "/";

export default new VueRouter({
    mode: 'history',
    routes:[
        { name: 'top', path: ROOT_PATH, component:  SampleComponent},
        { name: 'sample', path: `${ROOT_PATH}sample`, component: SampleComponent},
        { name: 'sample-button', path: `${ROOT_PATH}sample-button`, component: SampleButtonComponent},
        { name: 'sample-parameter', path: `${ROOT_PATH}sample-parameter/:id`, component: SampleParameterComponent},
        { name: 'sample-bind', path: `${ROOT_PATH}sample-bind`, component: SampleBindComponent},
        { name: 'sample-load', path: `${ROOT_PATH}sample-load`, component: SampleLoadComponent},
        { name: 'sample-modal-button', path: `${ROOT_PATH}sample-modal-button`, component: SampleModalButtonComponent},
        { name: 'sample-column', path: `${ROOT_PATH}sample-column`, component: SampleColumnComponent},
        { path: '*', component: PageNotFoundComponent},
    ]
})