import React from "react";
import 'js-joda-timezone';
import './clocks.css';
import ListElement from "./list-element";

class Clocks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clocks: []};
        this.props.executorService.delays(60000);
    }

    componentDidMount() {
        let clocks = function () {
            return this.props.repositories.clocks().getAll()
                .then((clocks) => {
                    this.setState({clocks: clocks});
                });
        };
        clocks.call(this);
        this.props.executorService.run(
            () => clocks.call(this)
        );
    }


    render() {
        return (
            <div className="container">
                <center><h1>Clocks</h1></center>
                <div className="grid">
                    <div className="search input-group">
                        <input type="text" id="zoneSearch"/>
                    </div>
                    {this.state.clocks.map((clock, index) => (
                        <ListElement key={index} data={
                            [
                                {value: clock._zoneId, className: 'zone'},
                                {value: clock._date, className: 'clock'}
                            ]}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


export default Clocks;