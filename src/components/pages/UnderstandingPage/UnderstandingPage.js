import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  state = {
    understanding: '',
  };

  handleSubmitNext = (event) => {
    event.preventDefault();
    // send feelings to reducer
    this.props.dispatch({
      type: 'SAVE_FEEDBACK',
      payload: this.state,
    });
    // navigate to next step
    this.props.history.push('/support');
  };

  handleChangeField = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <input
            type="number"
            name="understanding"
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

export default connect()(UnderstandingPage);
