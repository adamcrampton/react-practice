import React, { Component } from 'react';

class StateDemo extends Component {
    // State must be initialized in the constructor.
    constructor(props) {
        // The super method calls the parent constructor.
        // Usually called with props parameter - the reason for doing
        // this is in case access is needed to props within the constructor.
        super(props);

        // Note: Never change the state directly after initializing.
        // Use this.setState({numClicks: 50}); (except in the constructor - not possible).
        this.state = {
            clicked: false,
            numClicks: 0 // Start as zero clicks
        }
        // =====================================================================
        // You can also do it this way but it's only supported when using Babel.
        // Babel is automatically set up for this when using create-react-app.
        // No need for the constructor syntax when doing this.
        // state = {
        //     numClicks: 0
        // }
        // =====================================================================

        // Bind handleClick can be done in constructor to give context (best practice).
        this.handleClick = this.handleClick.bind(this);
        // ===========================================================
        // Note: You can also define it as a class property like this 
        // (instead of expicitly binding):
        // handleClick = () => {
        //     this.setState({clicked:true});
        // }
        // ===========================================================
    }
    handleClick(event) {
        this.setState({ 
            clicked: true,
            numClicks: this.state.numClicks + 1
        });
    }
    render() {
        return (
            <div>
                <p>{ this.state.clicked ? 'Clicked' : 'Not Yet Clicked' }</p>
                <p>Number of clicks is: { this.state.numClicks }</p>
                {/* Useful shorthand for conditional display aka boolean operator */}
                { this.state.numClicks === 7 && <h3>Lucky 7!</h3> }
                {/* 
                    Note: No parenthesis on method call - we are actually calling a reference 
                    to the method - otherwise it will execute immediately on render, not 
                    on the event.
                */}
                <button onClick={ this.handleClick }>Click Me</button>
            </div>
        )
    }
}

export default StateDemo;