import PropTypes from 'prop-types';
import { Ol } from './ContactsList.styled';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Ol>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </Ol>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
