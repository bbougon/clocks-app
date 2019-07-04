import {DateTimeFormatter, ZonedDateTime} from "js-joda";

export class Clock {
    constructor(data) {
        this._date = ZonedDateTime.parse(data._date)
            .format(DateTimeFormatter.ofPattern('MM/dd/yyyy HH:mm'));
        this._zoneId = data._zoneId;
    }

}