import React, { Component } from "react";

class Coin extends Component {
    render() {
        return (
            <div>
                { this.props.result && <img alt="Flip Result" width="100" height="100" src={ `./${this.props.result}.jpg` } />}
            </div>
        );
    }
}

export default Coin;