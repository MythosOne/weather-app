import React, { useState } from 'react';
import { ImSearch /*ImPlus*/ } from 'react-icons/im';
import {
  SearchBarForm,
  Container,
  ButtonSearch,
  // ButtonAdd,
  Input,
} from './SearchBar.styled';
import MyLocationCard from '../MyLocationCard/MyLocationCard';

export const SearchBar = ({ onAddCity, weather, onSubmit }) => {
  const [value, setValue] = useState('');
  // console.log(weatherCity)

  const handleSubmit = e => {
    e.preventDefault();

    onAddCity(value);
    onSubmit(value);
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <SearchBarForm onSubmit={handleSubmit}>
        <ButtonSearch type="submit">
          <ImSearch size={18} />
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
        {/* <ButtonAdd type="onClick">
          <ImPlus size={18} />
        </ButtonAdd> */}
      </SearchBarForm>
      <MyLocationCard weather={weather} />
    </Container>
  );
};
