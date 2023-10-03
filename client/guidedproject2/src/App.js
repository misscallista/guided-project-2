import logo from './logo.svg';
import './App.css';
import React from 'react';
import Characters from './components/Characters.js';

function App() {
  return (
    <div className="App">
      <h2>Our Swapi</h2>
      <Characters />
    </div>
  );
}

export default App;
