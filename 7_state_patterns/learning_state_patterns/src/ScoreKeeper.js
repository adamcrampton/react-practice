import React, { Component } from "react";

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            todos: [
                {
                    id: 1,
                    name: 'Wash Dishes',
                    status: 'incomplete'
                },
                {
                    id: 2,
                    name: 'Vacuum carpet',
                    status: 'incomplete'
                }
            ]
        };
        this.completeTodo = this.completeTodo.bind(this);
        this.increment = this.increment.bind(this);
        this.washDishes = this.washDishes.bind(this);
    }
    render() {
        return (
            <div>
                <p>Current Score: { this.state.score }</p>
                <button onClick={ this.increment }>Increment Score</button>
                <button onClick={ this.washDishes }>Wash Dishes</button>
            </div>
        )
    }
    // Before updating an array or object state, 
    // we should make a copy before setState'ing it.
    completeTodo(id) {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    // Make a copy of the object using 
                    // spread operator and updated property.
                    ...todo,
                    status: 'complete'
                }
            }
            return todo;
        });

        // Even if no updates, the unchanges items will still fall
        // through in the above logic.
        this.setState({
            todos: newTodos
        });
    }
    checkTask(name) {
        const task = this.state.todos.find((task) => task.name === name);
        return task ? task.status === 'complete' : 'error';
    }
    increment() {
        // Using callback - best practice for most uses.
        // This encloses all the logic to return a value to prevent
        // async issues with React itself.
        // i.e. Don't do this: this.setState({ score: this.state.score + 1 });
        this.setState(currentState => ({ score: currentState.score + 1 }));
    }
    washDishes() {
        const newTodos = this.state.todos.map(todo => {
            if (todo.name === 'Wash Dishes') {
                console.log('Washing dishes...');
                return {...todo, status: 'complete'}
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }
}

export default ScoreKeeper;