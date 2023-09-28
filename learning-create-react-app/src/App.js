import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

// export default means the App function is required when imported.
export default App;

// Exporting conditionally looks like this:
// ======
// export default module1
// export { module2, module3 }
//
// module1 is default, 2 and 3 optional modules
// ======
//
// import module1, {module2, module 3}
