import React, { Component } from "react";
import Die from "./Die";

// Parent component - stateful.
// Modifies child component Die via dynamic prop values.
class RollDice extends Component {
    // Define possible dice faces.
    static defaultProps = {
        sides: [
            "one", "two", "three", "four", "five", "six"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one"
        }
        this.roll = this.roll.bind(this);
    }
    render() {
        return (
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
    // Set new state.
    roll() {
        const newDice1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDice2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({
            die1: newDice1,
            die2: newDice2
        });
    }
}

export default RollDice;