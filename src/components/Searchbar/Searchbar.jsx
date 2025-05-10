import { useState} from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { Search } from '../../icons/IconComponent';
import {
  SearchBarForm,
  Container,
  ButtonSearch,
  Input,
} from './SearchBar.styled';

export const SearchBar = ({ setSearchCity, setCurrentWeatherCityId }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedValue = value.trim();

    if (normalizedValue.length === 0) {
      toast.error('Field must be filled');
      return;
    }

    setSearchCity(normalizedValue);

    setValue('');

    setCurrentWeatherCityId(null);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <SearchBarForm onSubmit={handleSubmit}>
        <ButtonSearch type="submit" aria-label="search" title="Search">
          <Search />
        </ButtonSearch>
        <Input
          name="inputData"
          value={value}
          onChange={handleChange}
          type="text"
          autoFocus
          autoComplete="on"
          placeholder="Search for a city"
        />
      </SearchBarForm>
    </Container>
  );
};

SearchBar.propTypes = {
  setSearchCity: PropTypes.func.isRequired,
  setCurrentWeatherCityId: PropTypes.func.isRequired,
};
