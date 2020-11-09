import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    support: '',
  };

  handleSubmitNext = (event) => {
    event.preventDefault();
    // send feelings to reducer
    this.props.dispatch({
      type: 'SAVE_SUPPORT',
      payload: this.state,
    });
    // navigate to next step
    this.props.history.push('/comments');
  };

  handleChangeField = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>How well are you being supported?</h3>
        <form onSubmit={this.handleSubmitNext}>
          <input
            type="number"
            name="support"
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

export default connect()(SupportPage);
