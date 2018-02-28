/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/sample2.vhtml'

@HtmlTemplate
@Component({
})
export class Sample2Component extends Vue {
    clickByAlertButton() {
        alert("test clicked");
    }
}
