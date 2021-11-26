import { Component } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptionsList from 'components/FeedbackOptionsList';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target: { textContent: buttonLabel } }) => {
    this.setState((previousState) => ({
      [buttonLabel]: previousState[buttonLabel] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    return values.reduce(reducer);
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((100 * this.state.good) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;

    const isFeedback = good || neutral || bad;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptionsList
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        {isFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There's no feedback" />
        )}
      </>
    );
  }
}

export default App;
