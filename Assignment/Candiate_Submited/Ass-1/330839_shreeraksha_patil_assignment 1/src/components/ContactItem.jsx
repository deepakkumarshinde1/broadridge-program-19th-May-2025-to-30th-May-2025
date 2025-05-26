import React from 'react';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={() => onEdit(contact)}>Edit</button>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ContactItem;
