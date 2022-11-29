import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

export const ContactList = ({ filteredContacts, deleteContact }) => (
  <ul>
    {filteredContacts.map(contact => (
      <li key={(contact.id = nanoid())} className={css.contactList}>
        {contact.name}: {contact.number}
        <button
          type="onClick"
          onClick={() => {
            deleteContact(contact.id);
          }}
          className={css.delBtnStyle}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
 
ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
