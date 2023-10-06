import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import css from '../Contact/Contact.module.css';

const Contact = ({ number, name, id }) => {
  const dispatch = useDispatch();

  const onContactDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li key={id} className={css.item}>
      <span className={css.span}>
        {name}: {number}
      </span>
      <button onClick={onContactDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

