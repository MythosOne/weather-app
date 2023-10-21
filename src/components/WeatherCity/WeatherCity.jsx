import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherList } from '../WeatherList/WeatherList';
import { WeatherForm, Title } from './WeatherCity.styled';
import WeatherCard from '../WeatherCard/WeatherCard';

export const WeatherCity = () => {
  const [cities, setCities] = useState([]);

  const addCity = city => {
    if (city.length === 0) {
      alert('Field must be filled');
    } else {
      setCities([...cities, { id: nanoid(), city: city }]);
    }

    console.log(cities)
  };

  return (
    <WeatherForm>
      <Title>Weather</Title>
      <SearchBar onAddCity={addCity} />
      {cities.map(city => (
        <WeatherCard city={city} />
      ))}
      {/* <WeatherList /> */}
    </WeatherForm>
  );
};
