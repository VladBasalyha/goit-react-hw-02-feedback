import css from '../Statistics/Section.module.css';

export const Statistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticsWrapper}>
      <p className={css.statisticsParagraph}>Statistics</p>
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
    </div>
  );
};
