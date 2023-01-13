import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/useLocalStorage';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './Phonebook.css'

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('')

  const onSubmit = (name, number) => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        return alert(`${name} is already in contacts`);
      }
    }
    const newItem = {
      name: name,
      number: number,
      id: nanoid(),
    };
    setContacts(prev => [...prev, newItem])
  };

  const changeFilter = e => {
    const { value } = e.currentTarget
    setFilter(value)
  }

  const getVisibleContacts = () => {
    const normFilter = filter.toLowerCase()
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normFilter)
    )
  }

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      )}
    </div>
  );
}
