import React, { Component } from 'react';

class SupportPage extends Component {
  handleSubmitNext = (event) => {
    event.preventDefault();
    // navigate to next step
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <h3>How well are you being supported?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default SupportPage;
