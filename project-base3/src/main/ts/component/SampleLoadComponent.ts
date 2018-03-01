/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/sample-load.vhtml'
import {ActionKey} from "../module/SampleModule";

@HtmlTemplate
@Component({
})
export class SampleLoadComponent extends Vue {
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
}
