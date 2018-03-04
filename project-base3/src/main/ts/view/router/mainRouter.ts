import VueRouter from 'vue-router'

import {SampleComponent} from "../component/SampleComponent";
import {PageNotFoundComponent} from "../component/PageNotFoundComponent";
import {SampleButtonComponent} from "../component/SampleButtonComponent";
import {SampleParameterComponent} from "../component/SampleParameterComponent";
import {SampleBindComponent} from "../component/SampleBindComponent";
import {SampleLoadComponent} from "../component/SampleLoadComponent";
import {SampleModalButtonComponent} from "../component/SampleModalButtonComponent";
import {SampleColumnComponent} from "../component/SampleColumnComponent";

export default new VueRouter({
    mode: 'history',
    routes:[
        { path: "/", component:  SampleComponent},
        { name: 'sample', path: '/sample', component: SampleComponent},
        { name: 'sample-button', path: '/sample-button', component: SampleButtonComponent},
        { name: 'sample-parameter', path: '/sample-parameter/:id', component: SampleParameterComponent},
        { name: 'sample-bind', path: '/sample-bind', component: SampleBindComponent},
        { name: 'sample-load', path: '/sample-load', component: SampleLoadComponent},
        { name: 'sample-modal-button', path: '/sample-modal-button', component: SampleModalButtonComponent},
        { name: 'sample-column', path: '/sample-column', component: SampleColumnComponent},
        { path: '*', component: PageNotFoundComponent},
    ]
})