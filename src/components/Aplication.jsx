import { Component } from "react";
import PropTypes from "prop-types";

export default class Aplication extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };
  handleIncrementBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  static propTypes = {
    step: PropTypes.number,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button
            style={{ margin: "10px" }}
            type="button"
            onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
          <h2>Statistics</h2>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
        </div>
      </>
    );
  }
}
