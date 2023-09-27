// JSX is transpiled to JSX using babel (loaded as a libary).
//
// Rules:
// ======
// - Tags must be contained within a single element
// - All HTML elements must have either a closing tag or be self closing
//
// Note: Multiple component classes like this should be in their own files.
//
// Basic syntax
// ============
const getRandom = () => {
    const words = ['First', 'Second', 'Third'];
    return words[Math.floor(Math.random() * words.length)];
};

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                {/* Regular HTML */}
                <h1>This tag is closed</h1>
                <img width="50" height="50" src="https://images.unsplash.com/photo-1692606674492-74aa82e187b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />
                {/* Using expression */}
                <h2>Two times 10 equals { 10 * 2 }</h2>
                {/* Using external function */}
                <h3>Random word: { getRandom() }</h3>
            </div>
        )
    }
}

// Conditional JSX
// ===============
const getNum = () => Math.floor(Math.random() * 10) + 1;

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is { num === 7 ? 'Seven' : 'Not Seven' }</h1>
            </div>
        )
    }
}