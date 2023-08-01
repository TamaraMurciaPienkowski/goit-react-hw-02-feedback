import React, { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <button className={css.btnGood} onClick={() => this.props.add('good')}>
          Good
        </button>
        <button
          className={css.btnNeutral}
          onClick={() => this.props.add('neutral')}
        >
          Neutral
        </button>
        <button className={css.btnBad} onClick={() => this.props.add('bad')}>
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
