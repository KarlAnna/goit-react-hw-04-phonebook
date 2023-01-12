import PropTypes from 'prop-types';
import { useState } from 'react';
import './Phonebook.css'

export default function ContactForm({ onSubmit }) {
    const[name, setName] = useState('')
    const [number, setNumber] = useState('')

    const formSubmitHandler = (e) => {
        e.preventDefault()
        onSubmit(name, number)
        reset()
    }

    const handleNameChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break
            default:
                break;
        }
    }

    const reset = () => {
        setName('')
        setNumber('')
    }

    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
                onChange={handleNameChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor="number">Number</label>
            <input
                onChange={handleNameChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type="submit">Add contact</button>
        </form>
    );
        
}

ContactForm.propTypes = {
        onSubmit: PropTypes.func,
    }