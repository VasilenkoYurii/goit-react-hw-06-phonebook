import PropTypes from 'prop-types';
import { SearchLabel, SearchInput } from './Filter.styled';

const Filter = ({ onChangeFind, value }) => (
  <SearchLabel>
    Find contscts by name
    <SearchInput
      type="text"
      value={value}
      onChange={onChangeFind}
    ></SearchInput>
  </SearchLabel>
);

Filter.propTypes = {
  onChangeFind: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
