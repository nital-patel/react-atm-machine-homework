import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './Account';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Account name="Checking"/>
        <Account name="savings"/>
      </div>
    );
  }
}

export default App;
