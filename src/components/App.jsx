import { useLocalStorage } from 'hooks/useLocalStorage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';

import { ContactForm, ContactList, Filter, Section } from '../components';
import { AppStyled, Main } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const createNewContact = data => {
    const normalizeFilter = data.name.toLowerCase();
    const stateNameArray = contacts.map(({ name }) => name.toLowerCase());

    !stateNameArray.includes(normalizeFilter)
      ? setContacts([...contacts, data])
      : Notify.failure(`${data.name} is already in contacts.`, {
          width: '350px',
          opacity: 0.8,
        });
  };

  const deleteContact = (contactId, name) => {
    setContacts(prevStates =>
      prevStates.filter(contact => contact.id !== contactId)
    );
    Notify.success(`${name}  delete from your contacts`, {
      width: '350px',
      opacity: 0.8,
    });
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const findContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <AppStyled>
      <Main>
        <Section title="Phonebook">
          <ContactForm createNewContact={createNewContact} />
        </Section>

        <Section title="Contacts">
          <Filter filterValue={filter} onChange={onFilterChange} />
          <ContactList contacts={findContact()} deleteContact={deleteContact} />
        </Section>
      </Main>
    </AppStyled>
  );
};
