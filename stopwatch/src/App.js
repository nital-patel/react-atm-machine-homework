import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.runTimer = this.runTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.state = {
      timer: 0
    }
  }

  runTimer(){
    clearInterval(this.run)
    let time = this.state.timer
    this.run = setInterval(()=>{
      this.setState({
        timer: time += 1
      })
    }, 10)
  }


    stopTimer(){
      clearInterval(this.run)
    }

    resetTimer(){
      clearInterval(this.run)
      this.setState({
        timer: 0
      })
    }


  render() {
    return (
      <div className="App">
        <h1>{this.state.timer}</h1>
        <button onClick={this.runTimer}>run</button>
        <button onClick={this.stopTimer}>stop</button>
        <button onClick={this.resetTimer}>reset</button>
      </div>
    );
  }
}

export default App;
