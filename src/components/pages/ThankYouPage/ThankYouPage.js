import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends Component {
  handleClickRestart = (event) => {
    this.props.dispatch({
      type: 'CLEAR_FEEDBACK',
    });
    // navigate to next step
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h3>Thank You!</h3>
        <button onClick={this.handleClickRestart}>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(ThankYouPage);
