import React, { Component } from 'react';
import css from './statistics.module.css';

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
      <div className={css.wrapper}>
        {this.countTotalFeedback() > 0 ? (
          <>
            <h2 className={css.title}>Statistics</h2>
            <p className={css.feedback}>Good: {this.props.good}</p>
            <p className={css.feedback}>neutral: {this.props.neutral}</p>
            <p className={css.feedback}>bad: {this.props.bad}</p>
            <p className={css.feedback}>Total: {this.countTotalFeedback()}</p>
            <p className={css.feedback}>
              Positive feedback: {this.countPositiveFeedbackPercentage()} %
            </p>
          </>
        ) : (
          <p className={css.noFeedback}>There is no feedback</p>
        )}
      </div>
    );
  }
}
export default Statistics;
