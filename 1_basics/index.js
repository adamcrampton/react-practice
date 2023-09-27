// Class based component
// =====================
class Hello extends React.Component {
	// Mandatory render method
	render() {
		// JSX code (transpiled by Babel)
		// Note; Everything must be wrapped in an element like a DIV (just like Vue)
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

// Function component
// ==================
function Hello() {
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	)
}