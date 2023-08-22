import PropTypes from 'prop-types';
import {FilterInput, Input} from './Filter.styled';

export const Filter = ({ filter, newContact }) => {
  return (
    <FilterInput>
         <h2>Contacts</h2>
        <p>Find contacts by name</p>
      <Input
       
        placeholder="Search..."
        type="text"
        name="filter"
        value={filter || ''}
        onChange={newContact}
      />
    </FilterInput>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  newContact: PropTypes.func.isRequired,
};