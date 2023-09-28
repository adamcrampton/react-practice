// An example of the "State As Props" pattern, where
// a parent component will be stateful and pass in updated values.
// Known as "downward data flow".
import { Component } from "react";

// to stateless child components as props, which are automatically updated.
class CounterParent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 5 };
    }
    render() {
        return (
            <div>
                <CounterChild count={ this.state.count } />
            </div>
        )
    }
}