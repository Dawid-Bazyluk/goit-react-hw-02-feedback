import { Component } from "react";

import Statistics from "./Statistics";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";

export default class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleLeaveFeedback = (e) => {
    const { name } = e.currentTarget;

    this.setState((prevState, props) => ({
      [name.toLowerCase()]: prevState[name.toLowerCase()] + props.step,
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

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          
        </Section>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.handleLeaveFeedback}></FeedbackOptions>

        <Section title="Statistics">
          {total === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
