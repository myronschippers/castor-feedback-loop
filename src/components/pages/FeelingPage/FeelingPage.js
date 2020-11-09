import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
  state = {
    feeling: '',
  };

  handleSubmitNext = (event) => {
    event.preventDefault();
    // send feelings to reducer
    this.props.dispatch({
      type: 'SAVE_FEEDBACK',
      payload: this.state,
    });
    // navigate to next step
    this.props.history.push('/understanding');
  };

  handleChangeField = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <input
            type="number"
            name="feeling"
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

export default connect()(FeelingPage);
