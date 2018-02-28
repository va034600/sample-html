import VueRouter from 'vue-router'

import {SampleComponent} from "../component/SampleComponent";
import {Sample2Component} from "../component/Sample2Component";
import {PageNotFoundComponent} from "../component/PageNotFoundComponent";

const rootPath = `/`;

export default new VueRouter({
    mode: 'history',
    routes:[
        { path: rootPath, component:  SampleComponent},
        { name: 'sample', path: rootPath + 'sample', component: SampleComponent},
        { name: 'sample2', path: rootPath + 'sample2/:id', component: Sample2Component},
        { path: '*', component: PageNotFoundComponent},
    ]
})