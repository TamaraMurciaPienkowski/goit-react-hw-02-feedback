import React, { Component } from 'react';

class Statistics extends Component {
  countTotalFeedback = () => {
    const totalValue = this.props.good + this.props.neutral + this.props.bad;
    return totalValue;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.props.good / this.countTotalFeedback()) * 100;
    return positivePercentage;
  };
  render() {
    return (
      <div>
        {this.countTotalFeedback() > 0 ? (
          <>
            <h2>Statistics</h2>
            <p>Good: {this.props.good}</p>
            <p>neutral: {this.props.neutral}</p>
            <p>bad: {this.props.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback:{this.countPositiveFeedbackPercentage()} %</p>
          </>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}
export default Statistics;
