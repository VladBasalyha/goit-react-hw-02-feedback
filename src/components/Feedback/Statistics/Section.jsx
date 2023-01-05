import css from '../Statistics/Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section className={css.feedbackSection}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
