// Standard React App Layout
// Includes one or more components
// ===============================
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a render of one or more components in an App component</h1>
                <JSXDemo/>
                <NumPicker/>
                <NumPicker/>
                <NumPicker/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));