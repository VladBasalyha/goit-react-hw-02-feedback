import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Section } from '../Feedback/Statistics/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Leave feedback'}>
      <div className={css.buttonsWrapper}>
        {options.map(option => (
          <button
            className={css.btn}
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </Section>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
