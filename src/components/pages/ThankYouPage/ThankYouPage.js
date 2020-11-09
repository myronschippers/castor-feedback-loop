import React, { Component } from 'react';

class ThankYouPage extends Component {
  handleClickRestart = (event) => {
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

export default ThankYouPage;
