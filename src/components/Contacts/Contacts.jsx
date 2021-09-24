import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contacts.module.css';

export default function Contacts(props) {
  const onDelete = id => {
    props.onClick(id);
  };

  const contacts = props.contacts;
  return (
    <ul className={styles.contacts}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
