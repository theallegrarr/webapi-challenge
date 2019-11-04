import React from 'react';
import Projects from './Projects';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Projects />
      </header>
    </div>
  );
}

export default App;
