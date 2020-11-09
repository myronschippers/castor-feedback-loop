import React, { Component } from 'react';

class CommentsPage extends Component {
  handleSubmitNext = (event) => {
    event.preventDefault();
    // navigate to next step
    this.props.history.push('/review');
  };

  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default CommentsPage;
