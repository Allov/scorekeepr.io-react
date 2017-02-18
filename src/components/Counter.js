import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  handlePositiveNegativeValue() {
    if (this.props.counter !== 0) {
      return this.props.counter > 0 ? 'counter-positive' : 'counter-negative';
    }

    return '';
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-buttons">
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
        <div className={`counter-num-label ${this.handlePositiveNegativeValue()}`}>{this.props.counter}</div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
