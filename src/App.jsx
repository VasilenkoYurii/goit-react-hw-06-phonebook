import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import Section from 'components/Section/Section';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { getVisibleContacts } from 'helperFunctions/helperFunctions';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [visibleContacts, setVisibleContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setVisibleContacts(getVisibleContacts(contacts, filter));
  }, [contacts, filter]);

  const addContact = values => {
    for (const contact of contacts) {
      if (values.name.toLowerCase() === contact.name.toLowerCase()) {
        return Notiflix.Notify.failure(`${values.name} is already in contact`);
      } else if (values.number.toLowerCase() === contact.number.toLowerCase()) {
        return Notiflix.Notify.failure(
          `${values.number} is already in contact`
        );
      }
    }

    setContacts([...contacts, { ...values, id: nanoid() }]);
    Notiflix.Notify.success(
      'Super, the contact has been added to the contact list'
    );
  };

  const deleteContact = (contactId, contactName) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    Notiflix.Notify.success(`Contact ${contactName} deleted successfully`);
  };

  const onChangeFind = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChangeFind={onChangeFind} value={filter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
