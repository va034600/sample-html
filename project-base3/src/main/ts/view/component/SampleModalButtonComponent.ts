/// <reference path="../../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../../vhtml/sample-modal-button.vhtml'
import {SampleModalComponent} from "./SampleModalComponent";
import {MutationKey} from "../module/SampleModalModule";

@HtmlTemplate
@Component({
    components: { //ここでコンポーネントを読み込みます。
        "sample-modal":SampleModalComponent,
    },
})
export class SampleModalButtonComponent extends Vue {
    //クリックするとshownをtrueにして、モーダルを表示します。
    clickByShowModalButton() {
        this.$store.commit(MutationKey.SET_SHOWN, true)
    }
}
