import BaseAPI from "./BaseAPI";

import {SampleEntity} from "../entity/SampleEntity";
import {Sample2Entity} from "../entity/Sample2Entity";
import {Sample2Parameter} from "../parameter/Sample2Parameter";
import {WebUrlParams} from "../WebUrlParams";

export default class SampleAPI extends BaseAPI {
    static getSample() {
        const apiUrl = `/data1.json`;

        return this.get<SampleEntity>(apiUrl);
    }

    static getSample2(parameter:Sample2Parameter) {
        const apiUrl = `/data2.json`;

        var params = new WebUrlParams();
        params.append("abc", parameter.abc);

        return this.get<Sample2Entity>(apiUrl, params);
    }
}
