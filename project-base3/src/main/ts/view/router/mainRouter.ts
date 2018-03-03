import VueRouter from 'vue-router'

import {SampleComponent} from "../component/SampleComponent";
import {PageNotFoundComponent} from "../component/PageNotFoundComponent";
import {SampleButtonComponent} from "../component/SampleButtonComponent";
import {SampleParameterComponent} from "../component/SampleParameterComponent";
import {SampleBindComponent} from "../component/SampleBindComponent";
import {SampleLoadComponent} from "../component/SampleLoadComponent";
import {SampleColumnComponent} from "../component/SampleColumnComponent";

const rootPath = `/`;

export default new VueRouter({
    mode: 'history',
    routes:[
        { path: rootPath, component:  SampleComponent},
        { name: 'sample', path: rootPath + 'sample', component: SampleComponent},
        { name: 'sample-button', path: rootPath + 'sample-button', component: SampleButtonComponent},
        { name: 'sample-parameter', path: rootPath + 'sample-parameter/:id', component: SampleParameterComponent},
        { name: 'sample-bind', path: rootPath + 'sample-bind', component: SampleBindComponent},
        { name: 'sample-load', path: rootPath + 'sample-load', component: SampleLoadComponent},
        { name: 'sample-column', path: rootPath + 'sample-column', component: SampleColumnComponent},
        { path: '*', component: PageNotFoundComponent},
    ]
})