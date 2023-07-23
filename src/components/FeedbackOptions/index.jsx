import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.add('good')}>Good</button>
        <button onClick={() => this.props.add('neutral')}>Neutral</button>
        <button onClick={() => this.props.add('bad')}>Bad</button>
      </div>
    );
  }
}
export default FeedbackOptions;
