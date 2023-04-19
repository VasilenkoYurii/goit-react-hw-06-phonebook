import { useDispatch } from 'react-redux';
import { SearchLabel, SearchInput } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SearchLabel>
      Find contscts by name
      <SearchInput
        type="text"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      ></SearchInput>
    </SearchLabel>
  );
};

export default Filter;
