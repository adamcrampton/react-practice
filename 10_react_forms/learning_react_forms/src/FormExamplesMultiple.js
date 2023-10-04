import React, { Component } from "react";

class FormExampleMultiple extends Component {
    constructor(props) {
        super(props);

        // Set default values for fields in state object.
        this.state = {
            name: "",
            email: "",
            password: ""
        }

        // Bind handlers.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Send to backend (or whatever need to be done with form data).
    handleSubmit(evt) {
        // Prevent form from HTML submitting and refreshing the page.
        evt.preventDefault();

        console.log(`Username submitted was ${ this.state.name }`);
    }
    // Handle change event on input (keystrokes).
    handleChange(evt) {
        // evt object contains value passed from form element.
        this.setState({
            // Use the field name attribute as a dynamic key.
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Form Demo - Multiple Inputs</h1>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="name">Username: </label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="Username"
                            value={ this.state.name } 
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={ this.state.email }
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={ this.state.password }
                            onChange={ this.handleChange }
                        />
                    </div>
                    <button onClick={ this.handleSubmit }>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormExampleMultiple;