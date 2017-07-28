/* eslint-env browser */
import React, { Component } from 'react';
// import $ from 'jquery';
//
import logo from './logo.svg';
import './App.css';
import {TodoBox} from './components/todoBox.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
        </div>
        <div className="App-content">
            <TodoBox />
        </div>
      </div>
    );
  }
}
