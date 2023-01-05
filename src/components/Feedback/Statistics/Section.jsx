import css from '../Statistics/Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className={css.feedbackSection}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
PropTypes.Section = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
