import {MemoryStore} from "./memory-store";
import {ClockRepository} from "../clock-repository";

export class MemoryRepositories {

    constructor() {
        this._clocks = new ClockRepository(new MemoryStore());
    }

    clocks() {
        return this._clocks;
    }
}