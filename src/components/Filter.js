import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filter} onChange={onChange} />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func
}

export default Filter