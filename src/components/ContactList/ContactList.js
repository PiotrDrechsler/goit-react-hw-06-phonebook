import { useSelector, useDispatch } from 'react-redux';

import { getFilterValue, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/actions';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return filteredContacts.length > 0 ? (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="submit" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;
