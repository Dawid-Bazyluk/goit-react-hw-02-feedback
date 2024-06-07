import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FeedbackOptions extends Component {
  static propTypes = {
    
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    return (
      <div>
        <button name="Good" type="button" onClick={this.props.onLeaveFeedback}>
          Good
        </button>
        <button
          name="Neutral"
          style={{ margin: "10px" }}
          type="button"
          onClick={this.props.onLeaveFeedback}>
          Neutral
        </button>
        <button name="Bad" type="button" onClick={this.props.onLeaveFeedback}>
          Bad
        </button>{" "}
      </div>
    );
  }
}
