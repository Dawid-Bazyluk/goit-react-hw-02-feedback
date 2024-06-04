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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
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
          <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>Positive Feedback:{this.countPositiveFeedbackPercentage()}%</li>
          </ul>
        </div>
      </>
    );
  }
}
