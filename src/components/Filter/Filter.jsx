import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { FilterInputStyled, FilterTitleStyled } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <FilterTitleStyled>Find contacts by name</FilterTitleStyled>
      <FilterInputStyled type="text" name="filter" onChange={onFilterChange} />
    </div>
  );
};

export default Filter;
