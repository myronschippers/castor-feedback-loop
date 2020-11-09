import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsPage extends Component {
  state = {
    comments: '',
  };

  handleSubmitNext = (event) => {
    event.preventDefault();
    // send feelings to reducer
    this.props.dispatch({
      type: 'SAVE_COMMENTS',
      payload: this.state,
    });
    // navigate to next step
    this.props.history.push('/review');
  };

  handleChangeField = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <input
            type="text"
            name="comments"
            placeholder="Enter number from 1 to 5"
            onChange={this.handleChangeField}
            required
          />
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(CommentsPage);
