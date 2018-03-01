/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/sample-parameter.vhtml'

@HtmlTemplate
@Component({
})
export class SampleParameterComponent extends Vue {
    get pathVariable() {
        return this.$route.params.id;
    }

    get getVariable() {
        return this.$route.query.test;
    }
}
