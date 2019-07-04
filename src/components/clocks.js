import React from "react";
import 'js-joda-timezone';
import './clocks.css';

class Clocks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clocks: []};
    }

    componentDidMount() {
        this.props.repositories.clocks().getAll()
            .then((clocks) => {
                this.setState({clocks: clocks});
            });
    }


    render() {
        return (
            <div className="container">
                <center><h1>Clocks</h1></center>
                <div className="grid">
                    {this.state.clocks.map((clock, index) => (
                        <>
                            <div className="zone">
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
    }
}


export default Clocks;