class Hello extends React.Component {
    // Setting prop defaults.
    static defaultProps = {
        to: "Adam",
        from: "Blanka",
        testNumber: 76,
        testArray: [
            {
                id: 1,
                name: "item 7"
            },
            {
                id: 2,
                name: "item 8"
            },
            {
                id: 3,
                name: "item 9"
            },
        ]
    };
    render() {
        // Props object passed in from calling component.
        // Note: Props are immutable.
        console.log(this.props);

        // You can also use object destructuring to shortcut extraction.
        const {to, from, testNumber, testArray} = this.props;

        return (
            // className is the React replacement for "class" attribute.
            <div className="app">
                {/* Looping over an array - ensure unique key is used */}
                <p>An item list:</p>
                <ul>
                    { testArray.map(item => <li key={item.id}>{item.name}</li>) }
                </ul>
                {/* Inline styles - properties are converted to camelCase, use double curly brackets */}
                <p style={{ fontSize: "24px", color: "#c00000" }}>===================================================</p>

                <p>Number of the day is { testNumber }</p>
                <p>Hello from { this.props.from } to { this.props.to }</p>
                <p>Hello from { to } to { from } </p>
                <p>Bye!</p>
            </div>
        )
    }
}