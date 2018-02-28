/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/sample.vhtml'
import {ActionKey, MutationKey} from "../module/SampleModule";

@HtmlTemplate
@Component({
})
export class SampleComponent extends Vue {
  /**
   * ライフサイクル
   */
  async created(){
    await this.$store.dispatch(ActionKey.LOAD)
  }

  /**
   * プロパティ
   */
  get message(){
    return this.$store.state.sample.message;
  }

  get title() {
    return this.$store.state.sample.title
  }

  set title(value) {
    this.$store.commit(MutationKey.SET_TITLE, value)
  }
}
