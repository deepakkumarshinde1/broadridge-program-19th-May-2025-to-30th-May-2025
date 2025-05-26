import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="container">
      <h2>Contact Management App</h2>
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        editingContact={editingContact}
      />
      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={deleteContact}
      />
    </div>
  );
};

export default App;
