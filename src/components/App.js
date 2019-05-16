import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

import { PLUS, MINUS, MULTI, DIVIDE, EQUAL, DOT } from '../config/const';
import { includes } from 'lodash';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();

    // memorizza le cifre e la virgola in sequenza
    this.digits = [];

    // memorizza primo e secondo operando
    this.operators = [];

    this.state = {
      display: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  updateDigits(digit) {
    console.log('digit:', digit);
    if (digit !== DOT || (digit === DOT && !includes(this.digits, digit))) {
      this.digits.push(digit);
      this.setState({ display: this.digits.join('') });
    }
  }

  setOperation(operation) {
    console.log('operation:', operation);
    // salvo operatore
    this.setState({ operation });
    // salvo primo operando
    const firstNumber = this.state.display;
    // aggiungo primo operando
    this.operators.push(parseFloat(firstNumber));
    // reset del this.digit
    this.digits = [];

    console.log('this.opetarors', this.operators, 'this.digits', this.digits);
  }

  doComputation() {
    const secondNumber = this.state.display;
    this.operators.push(parseFloat(secondNumber));

    console.log(this.operator);

    let result = '';

    switch (this.state.operation) {
      case PLUS:
        result = this.operators[0] + this.operators[1];
        break;
      case MINUS:
        result = this.operators[0] - this.operators[1];
        break;
      case MULTI:
        result = this.operators[0] * this.operators[1];
        break;
      case DIVIDE:
        result = this.operators[0] / this.operators[1];
        break;
    }

    this.operators = [];
    this.digits = [];
    this.setState({ display: parseFloat(result), operation: '' });
  }

  handleClick(label) {
    // Gestore del click
    // console.log('label:', label);

    switch (label) {
      case PLUS:
      case MINUS:
      case MULTI:
      case DIVIDE:
        this.setOperation(label);
        break;
      case EQUAL:
        this.doComputation();
        break;
      case DOT:
      default:
        this.updateDigits(label);
    }
  }

  render() {
    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div id="calculator">
          <Display value={this.state.display} />
          <Button label="7" click={this.handleClick} />
          <Button label="8" click={this.handleClick} />
          <Button label="9" click={this.handleClick} />
          <Button label={DIVIDE} click={this.handleClick} orange />
          <Button label="4" click={this.handleClick} />
          <Button label="5" click={this.handleClick} />
          <Button label="6" click={this.handleClick} />
          <Button label={MULTI} click={this.handleClick} orange />
          <Button label="1" click={this.handleClick} />
          <Button label="2" click={this.handleClick} />
          <Button label="3" click={this.handleClick} />
          <Button label={MINUS} click={this.handleClick} orange />
          <Button label="0" click={this.handleClick} />
          <Button label={DOT} click={this.handleClick} />
          <Button label={EQUAL} click={this.handleClick} orange />
          <Button label={PLUS} click={this.handleClick} orange />
        </div>
      </div>
    );
  }
}

export default App;
