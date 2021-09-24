import React from 'react';
import PropTypes from 'prop-types';

import useLocalStorage from './hooks/useLocalStorage';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import dataContacts from './contacts.json';
import styles from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', dataContacts);

  const { filter } = this.state;
  const filteredContacts = this.getContacts();

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <Form addContact={this.addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter} />
      <Contacts contacts={filteredContacts} onClick={this.deleteContact} />
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
