import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, updateContact, editingContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (editingContact) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <div className="form">
      <input
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={contact.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        type="number"
        value={contact.phone}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        {editingContact ? 'Update Contact' : 'Add Contact'}
      </button>
    </div>
  );
};

export default ContactForm;
