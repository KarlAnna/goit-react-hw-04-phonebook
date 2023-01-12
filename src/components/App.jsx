import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './Phonebook.css'

export default function App() {
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ])
  const [filter, setFilter] = useState('')

  const onSubmit = (name, number) => {
    for (let i = 0; i < contacts.length; i++) {
      if(contacts[i].name === name) { return alert(`${name} is already in contacts`) }
    }
    const newItem = {
      name: name,
      number: number,
      id: nanoid()
    }
    setContacts(prev => [...prev, newItem])
  }

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
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      {contacts.length > 0 && <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />}
    </div>
  )
}
