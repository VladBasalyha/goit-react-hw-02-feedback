import css from '../Statistics/Section.module.css';
import PropTypes from 'prop-types';
import { Section } from '../Statistics/Section';

export const Statistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticsWrapper}>
      <Section className={css.statisticsParagraph} title={'Statistic'}>
        <span>Good: {good}</span>
        <br />
        <span>Neutral: {bad}</span>
        <br />
        <span>Bad: {neutral}</span>
        <span>
          <br />
          Total: {total}
        </span>
        <span>
          <br />
          Positive feedback: {positivePercentage}%
        </span>
      </Section>
    </div>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
