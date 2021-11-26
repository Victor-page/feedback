import classes from './FeedbackOption.module.css';

const FeedbackOption = ({ onLeaveFeedback, label }) => (
  <button className={classes.feedbackOption} onClick={onLeaveFeedback}>
    {label}
  </button>
);

export default FeedbackOption;
