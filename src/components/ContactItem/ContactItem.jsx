import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice/contactsSlice';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { getFiltedContacts } from 'redux/filterSlice/filterSlice';
import { getVisibleContacts } from 'helperFunctions/helperFunctions';
import { Button, Item } from './ContactItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();
  const { numbers } = useSelector(getContacts);
  const filter = useSelector(getFiltedContacts);

  return getVisibleContacts(numbers, filter).map(({ id, name, number }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactItem;
