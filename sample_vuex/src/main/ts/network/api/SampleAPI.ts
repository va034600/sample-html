import BaseAPI from "./BaseAPI";

import {SampleEntity} from "../entity/SampleEntity";

export default class SampleAPI extends BaseAPI {
    static getSample() {
        const apiUrl = `/data.json`;

        return this.get<SampleEntity>(apiUrl);
    }
}
