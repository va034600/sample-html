/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/sample-button.vhtml'

@HtmlTemplate
@Component({
})
export class SampleButtonComponent extends Vue {
    clickByAlertButton() {
        alert("test clicked");
    }
}
