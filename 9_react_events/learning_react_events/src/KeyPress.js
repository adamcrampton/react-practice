import React, { Component } from "react";

class KeyPress extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPressFromConstructor = this.handleKeyPressFromConstructor.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Input Changing</h1>
                {/* Binding inline - not ideal */}
                <input placeholder="Add text" onKeyUp={ this.handleKeyPressInline.bind(this) }></input>
                {/* Binding using constructor */}
                <input placeholder="Add text" onKeyUp={ this.handleKeyPressFromConstructor }></input>
                {/* Binding using arrow function - not ideal */}
                <input placeholder="Add text" onKeyUp={ (e) => this.handleKeyPressArrowFunction(e) }></input>
            </div>
        );
    }
    // Note: evt variable contains standard React event data.
    handleKeyPressInline(evt) {
        console.log(`Key code ${evt.keyCode} was pressed`);
        if (evt.keyCode === 56) {
            console.log('The asterisk key was pressed');
        }
    }
    handleKeyPressFromConstructor(evt) {
        console.log(`Key code ${evt.keyCode} was pressed`);
        if (evt.keyCode === 56) {
            console.log('The asterisk key was pressed');
        }
    }
    handleKeyPressArrowFunction(e) {
        console.log(`Key was pressed`);
    }
}

export default KeyPress;