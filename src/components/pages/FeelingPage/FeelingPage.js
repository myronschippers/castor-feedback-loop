import React, { Component } from 'react';

class FeelingPage extends Component {
  handleSubmitNext = (event) => {
    event.preventDefault();
    // navigate to next step
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default FeelingPage;
