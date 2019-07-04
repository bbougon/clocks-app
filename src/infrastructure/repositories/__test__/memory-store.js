import {Store} from "../store";

export class MemoryStore extends Store {

    constructor(){
        super();
        this._entities = [];
    }

    add(entity) {
        this._entities.push(entity);
    }

    getAll() {
        return new Promise((resolve => resolve(this._entities)));
    }
}