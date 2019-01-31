import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BottomContainer from './components/BottomContainer/BottomContainer';
import TopContainer from './components/TopContainer/TopContainer';


class App extends Component {
  render() {
    return (
      <div className="App row">

        <TopContainer></TopContainer>
        <BottomContainer></BottomContainer>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload222.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

     
      </div>
    );
  }
}





export default App;
