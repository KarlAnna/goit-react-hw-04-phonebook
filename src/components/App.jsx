import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './Phonebook.css'

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
  }

  onSubmit = (states) => {
    const { contacts } = this.state
    for (let i = 0; i < contacts.length; i++) {
      if(contacts[i].name === states.name) { return alert(`${states.name} is already in contacts`) }
    }

    const newItem = {
      name: states.name,
      number: states.number,
      id: nanoid()
    }

    this.setState(state => ({
      contacts: state.contacts.concat(newItem)
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    const normFilter = filter.toLowerCase()
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normFilter)
      )
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }


  render() {
    const { contacts, filter } = this.state

    return (
      <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        {contacts.length > 0 && <ContactList contacts={this.getVisibleContacts()} onDelete={this.deleteContact} />}
      </div>
    )
  }
}

export default App;