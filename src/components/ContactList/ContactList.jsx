import { useSelector } from 'react-redux';
import css from '../ContactList/ContactList.module.css';
import Contact from './Contact/Contact';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(({ id, text }) => (
          <Contact key={id} name={text.name} number={text.number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
