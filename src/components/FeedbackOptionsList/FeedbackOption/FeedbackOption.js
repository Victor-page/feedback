import PropTypes from 'prop-types';

import classes from './FeedbackOption.module.css';

const FeedbackOption = ({ onLeaveFeedback, label }) => (
  <button className={classes.feedbackOption} onClick={onLeaveFeedback}>
    {label}
  </button>
);

FeedbackOption.propTypes = {
  label: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
