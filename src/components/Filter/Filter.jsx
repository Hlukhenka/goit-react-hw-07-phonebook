import { useDispatch, useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';
import { change } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(change(event.currentTarget.value));
  };

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={css.input}
          placeholder="Search"
          onChange={onFilterChange}
          value={filterValue}
        />
      </label>
    </>
  );
};

export default Filter;
