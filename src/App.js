import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent'


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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MapComponent lat={40.756795} lng={-73.954298}/>
      </header>
    </div>
  );
}

export default App;
