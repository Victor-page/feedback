import FeedbackOption from './FeedbackOption/FeedbackOption';

const FeedbackOptionsList = ({ options, onLeaveFeedback }) =>
  options.map((option) => (
    <FeedbackOption
      key={option}
      onLeaveFeedback={onLeaveFeedback}
      label={option}
    />
  ));

export default FeedbackOptionsList;
