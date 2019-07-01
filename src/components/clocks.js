import React from "react";
import 'js-joda-timezone';
import './clocks.css';
import {DateTimeFormatter, ZonedDateTime} from 'js-joda';

class Clock {
    constructor(data) {
        this._date = ZonedDateTime.parse(data._date)
            .format(DateTimeFormatter.ofPattern('MM/dd/yyyy HH:mm'));
        this._zoneId = data._zoneId;
    }

}

class Clocks extends React.Component {

    state = {
        clocks: []
    };

    componentDidMount() {
        fetch('https://clocks-api.herokuapp.com/clocks')
            .then(res => res.json())
            .then((data) => {
                let clocks = data.map((clock) => {
                    return new Clock(clock);
                });
                this.setState({clocks: clocks})
            })
            .catch(console.log)
    }


    render() {
        return (
            <ClocksTemplate clocks={this.state.clocks}/>
        )
    }
}

const ClocksTemplate = ({clocks}) => {

    return (
        <div className="container">
            <center><h1>Clocks</h1></center>
            <div className="grid">
                {clocks.map((clock, index) => (
                    <>
                        <div className="zone" key={index}>
                            {clock._zoneId}
                        </div>

                        <div className="clock">
                            {clock._date}
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
};

export default Clocks;