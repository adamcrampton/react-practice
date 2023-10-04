import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { name: "Milk", qty: "2 litres" },
                { name: "Bread", qty: "2 loaves" }
            ]
        };

        this.addItem = this.addItem.bind(this);
    }
    addItem(item) {
        this.setState(state => ({
            // This is appending the item to the existing items in state.
            items: [...state.items, item]
        }));
    }
    renderItems() {
        return (
            <ul>
                { this.state.items.map(item => (
                    <li key={ item.name }>{ item.name }: { item.qty }</li>
                )) }
            </ul>
        );
    }
    render() {
        // Include the form inside the component -
        // We export the addItem method to allow it to pass data upwards.
        return (
                <div>
                    <div>{ this.renderItems() }</div>
                    <ShoppingListForm addItem={ this.addItem } />
                </div>
        );
    }
}

export default ShoppingList;