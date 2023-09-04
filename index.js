class Hello extends React.Component {
	// Mandatory render method
	render() {
		// JSX code (transpiled by Babel)
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		);
	}
}

// Component tag (first arg) must have a closing slash.
// This call renders the Hello component (defined above) to the root DIV (in index.html).
ReactDOM.render(<Hello />, document.getElementById('root'));
