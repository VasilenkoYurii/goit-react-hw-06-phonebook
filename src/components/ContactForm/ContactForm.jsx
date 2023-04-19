import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice/contactsSlice';
import { MainForm, Label, Input, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');

  const dispatch = useDispatch();

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNamber(e.currentTarget.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    const userObj = {
      name: name,
      number: number,
    };
    dispatch(addContact(userObj));
    setName('');
    setNamber('');
  };

  return (
    <Formik initialValues={(name, number)} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange}
            value={name}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChange}
            value={number}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </MainForm>
    </Formik>
  );
}

export default ContactForm;
