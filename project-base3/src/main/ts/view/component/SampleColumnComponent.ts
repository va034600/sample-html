/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-column.vhtml'

@HtmlTemplate
@Component({
})
export class SampleColumnComponent extends Vue {
    st = "RIGHT"

    get selectType(){
        return this.st;
    }

    set selectType(value) {
        this.st = value;
    }
}
