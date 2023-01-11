import PropTypes from 'prop-types';
import ContactItem from "./ContactItem"

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            <ul>
                {contacts.map((contact) =>
                    <li key={contact.id}>
                        <ContactItem contact={contact} onDelete={onDelete} />
                    </li>
                )}
            </ul>
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDelete: PropTypes.func
}

export default ContactList