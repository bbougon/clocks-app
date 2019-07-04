import {ClockRepository} from "./clock-repository";
import {RestClockStore} from "./rest-clock-store";

export class RESTRepositories {

    constructor() {
        this._clocks = new ClockRepository(new RestClockStore());
    }

    clocks() {
        return this._clocks;
    }
}