import React, { Component } from 'react';

class ReviewPage extends Component {
  submitFeedback = (event) => {
    // navigate to next step
    this.props.history.push('/thank-you');
  };

  render() {
    return (
      <div>
        <h3>Review Your Feedback</h3>
        <button onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

export default ReviewPage;
