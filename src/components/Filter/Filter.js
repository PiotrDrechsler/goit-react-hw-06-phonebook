import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <label>Find contacts by name or phone number</label>
      <input type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default Filter;
