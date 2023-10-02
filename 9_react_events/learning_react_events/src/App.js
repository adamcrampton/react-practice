import React from 'react';
import NumberList from "./NumberList";
import KeyPress from './KeyPress';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Event binding notes */}
      <KeyPress />
      {/* Passing methods to child components notes */}
      <NumberList />
    </div>
  );
}

export default App;