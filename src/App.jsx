import { useState } from 'react';
import PropTypes from 'prop-types';

import useLocalStorage from './hooks/useLocalStorage';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import dataContacts from './contacts.json';
import styles from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', dataContacts);
  const [filter, setFilter] = useState('');

  const addNewContact = newContact => {
    contacts.find(elem => elem.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(state => [...state, newContact]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const filteredContacts = getContacts();

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <Form addContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={filteredContacts} onClick={deleteContact} />
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
