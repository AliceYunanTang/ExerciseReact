import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component life cycle</h2>
        </div>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      r:0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  
  getRandomNumber(){
    console.log("random number called");
    this.setState({r: Math.floor(Math.random()*10)})
  }
  
  
  render(){
    return (
      <div>
        <p className="App-intro">
        To be started, edit <code>src/App.js</code> and save to reload</p>
        <button onClick={this.getRandomNumber}>
          Rondom Number
        </button>
        <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}

class Numbers extends Component {
  
  componentWillMount(){
    console.log("componentWillMount called here");
  }
  
  componentDidMount(){
    console.log("componentDidMount called here");
  }
  
  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called here");
  }
  shouldComponentUpdate(newProps){
    console.log("shouldComponentUpdate called here");
    return true;
  }
  componentWillUpdate(newProps){
    console.log("componentWillUpdate called here");
  }
  componentDidUpdate(newProps){
    console.log("componentDidUpdate called here");
  }
  componentWillUnmount(newProps){
    console.log("componentWillUnmount called here");
  }
  
  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
