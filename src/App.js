import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const activities = [
  {
    name: 'Accordage',
    durationMin: 2,
  },
  {
    name: 'Rythme',
    ratio: 0.25,
  },
  {
    name: 'Accords',
    ratio: 0.1,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Activity Schedule
        </p>
      </div>
    );
  }
}

export default App;
