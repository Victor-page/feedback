import { Component } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptionsList from 'components/FeedbackOptionsList';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target: { textContent: label } }) => {
    const property = label.toLowerCase();
    this.setState((previousState) => ({
      [property]: previousState[property] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    return values.reduce(reducer);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptionsList
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
