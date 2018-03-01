/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/navigation.vhtml'
import router from '../router/mainRouter'

@HtmlTemplate
@Component({
    router,
})
export class NavigationComponent extends Vue {
    flag = false;

    get opendMenu() {
        return this.flag;
    }

    clickByToggleMenuButton() {
        this.flag = !this.flag;
    }
}
