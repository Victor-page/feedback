const FeedbackOption = ({ onLeaveFeedback, label }) => (
  <button onClick={onLeaveFeedback}>{label}</button>
);

export default FeedbackOption;
