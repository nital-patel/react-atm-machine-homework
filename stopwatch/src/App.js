import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.setTime = this.setTime.bind(this);
    this.runTimer = this.runTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this)
    this.state = {
      timer: 0
    }
  }

  setTime(e){
    e.preventDefault()
    let timer = e.target.timer.value;
    console.log(e.target.timer.value);
    this.setState({
      timer: timer
    })
  }

  runTimer(){
    clearInterval(this.run)
    let time = this.state.timer
    let that = this
    this.run = setInterval(function(){
      if(time > 0){
        that.setState({
          timer: time -= 1
        })
      }
    }, 1000)
    }


    stopTimer(){
      clearInterval(this.run)
    }


  render() {
    return (
      <div className="App">
        <h1>{this.state.timer}</h1>
        <form onSubmit={this.setTime}>
          <input name="timer" type="text"/>
          <button>set timer</button>
        </form>
        <button onClick={this.runTimer}>run</button>
        <button onClick={this.stopTimer}>stop</button>
      </div>
    );
  }
}

export default App;
