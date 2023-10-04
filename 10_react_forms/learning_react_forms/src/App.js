import React from "react";
import FormExample from "./FormExamples";
import FormExampleMultiple from "./FormExamplesMultiple";
import ShoppingList from "./ShoppingList";
import './App.css';

function App() {
  return (
    <div className="App">
      <FormExample />
      <FormExampleMultiple />
      <div>
        <p>==================<br />
        Shopping List Demo<br />
        ==================</p>
        <ShoppingList />
      </div>
    </div>
  );
}

export default App;
