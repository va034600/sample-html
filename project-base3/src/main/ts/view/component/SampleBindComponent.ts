/// <reference path="../../index.d.ts"/>
import Vue from "vue";
import Component from "vue-class-component";
import HtmlTemplate from "../../../vhtml/sample-bind.vhtml";
import {MutationKey} from "../module/SampleBindModule";

@HtmlTemplate
@Component({
})
export class SampleBindComponent extends Vue {
  get comment() {
    return this.$store.state.sampleBind.comment
  }

  set comment(value) {
    this.$store.commit(MutationKey.SET_COMMENT, value)
  }
}
