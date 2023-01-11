import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
    return (
        <>
          <p>{contact.name}: {contact.number}</p>
          <button type="button" onClick={()=> onDelete(contact.id)}>Delete</button>
        </>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
    onDelete: PropTypes.func
}

export default ContactItem