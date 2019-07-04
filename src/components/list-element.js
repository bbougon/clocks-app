import React from "react";

class ListElement extends React.Component {

    render() {
        return (
            this.props.data.map((element, index) => {
                return <div key={index} className="{element.className}">{element.value}</div>;
            })
        );
    }
}

export default ListElement;