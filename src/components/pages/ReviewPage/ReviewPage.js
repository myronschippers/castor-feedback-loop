import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewPage extends Component {
  submitFeedback = (event) => {
    this.postFeedback();
  };

  postFeedback() {
    axios
      .post('/api/feedback', this.props.store.feedback)
      .then((response) => {
        // navigate to next step
        this.props.history.push('/thank-you');
      })
      .catch((err) => {
        console.log(err);
        alert('Terrible feedback, try again.');
      });
  }

  render() {
    const feedback = this.props.store.feedback;

    return (
      <div>
        <h3>Review Your Feedback</h3>
        <p>Feeling: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>Comments: {feedback.comments}</p>
        <button onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);
