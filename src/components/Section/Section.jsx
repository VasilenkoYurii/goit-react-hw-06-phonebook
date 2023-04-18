import PropTypes from 'prop-types';
import { SectionDiv, SectionTitle, SectionMainTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionDiv>
    {title && title === 'Phonebook' ? (
      <SectionMainTitle>{title}</SectionMainTitle>
    ) : (
      <SectionTitle>{title}</SectionTitle>
    )}
    {children}
  </SectionDiv>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Section;
