import React, { Component } from "react";
import Coin from "./Coin";
import { coinFlip } from "./Helpers";

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
        // =============================================================================
        // NOTE: This would all be better if the coin data existed in an object, and was
        // updated by creating a brand new object then calling setState with it.
        // Video using spread to unpack: 
        // https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14375640#content
        // =============================================================================
        // Update counter + set last.
        const last = coinFlip();
        this.setState({ [last]: this.incrementCounter(last) });
    }
    // Generate random boolean value and assign to last flipped.
    incrementCounter(last) {
        this.setState({ last: last });
        return this.state[last] + 1;
    }
}

export default CoinFlipper;