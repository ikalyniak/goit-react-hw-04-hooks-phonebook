import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contacts.module.css';

class Contacts extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  onDelete = id => {
    this.props.onClick(id);
  };

  render() {
    const contacts = this.props.contacts;
    return (
      <ul className={styles.contacts}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}:{contact.number}
            </p>
            <button type="button" onClick={() => this.onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
