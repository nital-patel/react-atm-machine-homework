import React, { Component } from 'react';
import './App.css';
import Account from './Account';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Account name="Checking"/>
        <Account name="savings"/>
      </div>
    );
  }
}

export default App;
