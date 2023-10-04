import React, { Component } from "react";

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "", qty: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();

        // Pass all state data upwards.
        // This will trigger execution of addItem in parent component.
        this.props.addItem(this.state);

        // Reset form fields.
        this.setState({
            name: "",
            qty: ""
        });
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
            <div>
                <label htmlFor="item">Item: </label>
                <input 
                    type="text"
                    name="name" 
                    placeholder="Item"
                    value={ this.state.name } 
                    onChange={ this.handleChange }
                />
            </div>
            <div>
                <label htmlFor="qty">Qty: </label>
                <input 
                    type="number"
                    name="qty"
                    placeholder="Qty"
                    value={ this.state.qty }
                    onChange={ this.handleChange }
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default ShoppingListForm;