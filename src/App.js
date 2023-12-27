// App.js
import { Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChainInfo from './ChainInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Utilisez Link au lieu de l'élément <a> */}
        <Link to="/ChainInfo" className="App-link">
          ChainInfo
        </Link>
        {/* Utilisez Link au lieu de l'élément <a> */}
        <Link to="/FakeBayc" className="App-link">
          FakeBayc
        </Link>
      </header>

    </div>
  );
}

export default App;
