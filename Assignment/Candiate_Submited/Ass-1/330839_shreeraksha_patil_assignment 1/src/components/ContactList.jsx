import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <table className="contact-table" border="1px" cellPadding="10px">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
