import { useState } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptionsList from 'components/FeedbackOptionsList';
import Section from 'components/Section';
import Notification from 'components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = ({ target: { textContent: buttonLabel } }) => {
    switch (buttonLabel) {
      case 'good':
        setGood((previousState) => previousState + 1);
        break;

      case 'neutral':
        setNeutral((previousState) => previousState + 1);
        break;

      case 'bad':
        setBad((previousState) => previousState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((100 * good) / countTotalFeedback());

  const buttonLabels = Object.keys({ good, neutral, bad });
  const isFeedback = good || neutral || bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptionsList
          options={buttonLabels}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {isFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There's no feedback" />
        </Section>
      )}
    </>
  );
};

export default App;
