/// <reference path="../../index.d.ts"/>
import Vue from "vue";
import Component from "vue-class-component";
import HtmlTemplate from "../../../vhtml/sample-bind.vhtml";
import {MutationKey} from "../module/SampleModule";

@HtmlTemplate
@Component({
})
export class SampleBindComponent extends Vue {
  get title() {
    return this.$store.state.sample.title
  }

  set title(value) {
    this.$store.commit(MutationKey.SET_TITLE, value)
  }
}
