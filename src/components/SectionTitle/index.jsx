import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import css from './sectionTitle.module.css';

class SectionTitle extends Component {
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
  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Please leave feedback</h1>
        <FeedbackOptions add={this.add} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
export default SectionTitle;
