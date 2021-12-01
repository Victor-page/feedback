import PropTypes from 'prop-types';

import FeedbackOption from './FeedbackOption';

const FeedbackOptionsList = ({ options, onLeaveFeedback }) =>
  options.map((option) => (
    <FeedbackOption
      key={option}
      onLeaveFeedback={onLeaveFeedback}
      label={option}
    />
  ));

FeedbackOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptionsList;
