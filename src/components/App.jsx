import { Feedback } from './Feedback/Feedback';
import { Section } from './Feedback/Statistics/Section';
export const App = () => {
  return (
    <Section title={'Leave your feedback'}>
      <Feedback></Feedback>
    </Section>
  );
};
