import React, { Component } from 'react';
import Button from './Button';
import { PLUS, MINUS, SET, RESET } from '../config/const';

class App extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operator) {
    // Gestore del click
  }

  render() {
    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div>VUOTO</div>
      </div>
    );
  }
}

export default App;
