import {Store} from "./store";
import {Clock} from "../../domain/clock";

export class RestClockStore extends Store {

    getAll() {
        return fetch('https://clocks-api.herokuapp.com/clocks')
            .then(res => res.json())
            .then((data) => {
                return data.map((clock) => {
                    return new Clock(clock);
                });
            })
            .catch(console.log)
    }
}