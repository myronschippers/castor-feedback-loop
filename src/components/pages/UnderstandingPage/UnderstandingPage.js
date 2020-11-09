import React, { Component } from 'react';

class UnderstandingPage extends Component {
  handleSubmitNext = (event) => {
    event.preventDefault();
    // navigate to next step
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default UnderstandingPage;
