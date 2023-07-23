import React, { Component } from 'react';

class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  add = value => {
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalValue = this.state.good + this.state.neutral + this.state.bad;
    return totalValue;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positivePercentage;
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.add('good')}>Good</button>
        <button onClick={() => this.add('neutral')}>Neutral</button>
        <button onClick={() => this.add('bad')}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>neutral: {this.state.neutral}</p>
        <p>bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback:{this.countPositiveFeedbackPercentage()} %</p>
      </div>
    );
  }
}
export default Buttons;
