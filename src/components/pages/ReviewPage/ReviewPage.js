import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {
  submitFeedback = (event) => {
    // navigate to next step
    this.props.history.push('/thank-you');
  };

  render() {
    return (
      <div>
        <h3>Review Your Feedback</h3>
        <p>Feeling: {this.props.store.feedback.feeling}</p>
        <p>Understanding: {this.props.store.feedback.understanding}</p>
        <p>Support: {this.props.store.feedback.support}</p>
        <p>Comments: {this.props.store.feedback.comments}</p>
        <button onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);
