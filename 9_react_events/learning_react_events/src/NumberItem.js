import React, { Component } from "react";

class NumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    // This is necessary because -
    // Calling this.props.removeFn will receive the evt value from the click event as parameter.
    // So we use this a way to call the method using the "value" prop as the parameter instead.
    // 
    // NOTE: Prepending prop method with "handle" is good naming.
    handleRemove(evt) {
        this.props.removeFn(this.props.value);
    }
    render() {
        return (
            // Remove method passed in as prop from parent.
            <div>{ this.props.value }<button onClick={this.handleRemove}>X</button></div>
        );
    }
}

export default NumberItem;