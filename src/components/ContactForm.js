import PropTypes from 'prop-types';
import { Component } from 'react';
import './Phonebook.css'

class ContactForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {
        name: '',
        number: ''
    }

    formSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmit({...this.state})
        this.reset()
    }

    handleNameChange = (e) => {
        const { name } = e.target
        this.setState({ [name]: e.target.value })
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }
    

    render() {
        return (
            <form className='form' onSubmit={this.formSubmitHandler}>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={this.handleNameChange}
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor='number'>Number</label>
                <input
                    onChange={this.handleNameChange}
                    value={this.state.number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm