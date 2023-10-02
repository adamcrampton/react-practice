import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [
                1, 2, 3, 4, 5
            ]
        }

        this.remove = this.remove.bind(this);
    }
    remove(numberToRemove) {
        this.setState(state => ({
            nums: state.nums.filter(num => num !== numberToRemove)
        }));
    }
    render() {
        // Generate list HTML using child component.
        const nums = this.state.nums.map(num => {
            return <NumberItem key={num} value={num} removeFn={this.remove} />
        });

        return (
            <div>
                <h2>Number List</h2>
                <ul>
                    { nums }
                </ul>
            </div>
        );
    }
}

export default NumberList;