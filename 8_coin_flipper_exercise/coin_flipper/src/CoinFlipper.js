import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            last: null
        }
        this.flipCoin = this.flipCoin.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Let's Flip A Coin</h1>
                <Coin result={ this.state.last } />
                <p>Out of { this.state.heads +  this.state.tails } flips, { this.state.heads } flips were heads and { this.state.tails } were tails.</p>
                <button onClick={ this.flipCoin }>Flip Coin</button>
            </div>
        );
    }
    flipCoin() {
        // Update counter + set last.
        const last = Math.round(Math.random()) ? "heads" : "tails";
        this.setState({ [last]: this.incrementCounter(last) });
    }
    // Generate random boolean value and assign to last flipped.
    incrementCounter(last) {
        this.setState({ last: last });
        return this.state[last] + 1;
    }
}

export default CoinFlipper;