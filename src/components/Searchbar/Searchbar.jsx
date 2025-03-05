import React, { useState } from 'react';
import { Search } from '../../icons/IconComponent';
import {
  SearchBarForm,
  Container,
  ButtonSearch,
  Input,
} from './SearchBar.styled';

export const SearchBar = ({ setSearchCity }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedValue = value.toLowerCase().trim();

    if (normalizedValue.length === 0) {
      alert('Field must be filled');
      return;
    }

    setSearchCity(normalizedValue);

    setValue('');
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
