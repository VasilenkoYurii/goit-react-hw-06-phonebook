import PropTypes from 'prop-types';
import { Button, Item } from './ContactItem.styled';

const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onDeleteContact(id, name)}>
          Delete
        </Button>
      </Item>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
