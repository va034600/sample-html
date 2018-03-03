/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component<PageNotFoundComponent>({
    template: `<div>page not found!!</div>`
})
export class PageNotFoundComponent extends Vue {
}
