import React, { Component } from "react";

// Child component - stateless.
class Die extends Component {
    constructor(props) {
        // The props contain the face value - which completes the FA class to 
        // show the specified dice.
        super(props);
    }
    render() {
        return <i className={`Die fas fa-dice-${this.props.face}`} />;
    }
}

export default Die;