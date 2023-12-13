// Import necessary dependencies
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChainInfo from './ChainInfo'; // Import your ChainInfo component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/ChainInfo"
        >
          ChainInfo 
        </a>
      </header>

      {/* Use the ChainInfo component */}
      <ChainInfo />
    </div>
  );
}

export default App;

