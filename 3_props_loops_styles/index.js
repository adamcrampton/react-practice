class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Linus" 
                    from="Amy" 
                    testNumber={3} // Non-strings must be wrapped
                    testArray={[
                        {
                            id: 1,
                            name: "item 1"
                        },
                        {
                            id: 2,
                            name: "item 2"
                        },
                        {
                            id: 3,
                            name: "item 3"
                        },
                    ]}
                />
                <Hello 
                    to="Farfel" 
                    from="Maddy" 
                    testNumber={4}
                    testArray={[
                        {
                            id: 4,
                            name: "item 4"
                        },
                        {
                            id: 5,
                            name: "item 5"
                        },
                        {
                            id: 6,
                            name: "item 6"
                        },
                    ]}
                />
                {/* The below will render defaults in the Hello component. */}
                <Hello />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));