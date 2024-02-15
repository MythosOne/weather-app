import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherForm, Title } from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import { apiServiceSearchData } from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

export const WeatherCity = ({ weather, weatherCity, setWeatherCity }) => {
  // const [weatherCity, setWeatherCity] = useState(
  //   JSON.parse(localStorage.getItem('weatherCity')) ?? []
  // );
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log("first value: " + JSON.stringify(value))
  console.log('weatherCity:', weatherCity);

  // !!!!!!!!!!!!!!!!
  const handleSubmit = value => {
    setValue(value.toLowerCase());
  };

  const addCity = city => {
    if (city.length === 0) {
      alert('Field must be filled');
    }
  };

  useEffect(() => {
    localStorage.setItem('weatherCity', JSON.stringify(weatherCity));

    if (value.trim() === '') {
      return;
    }

    setIsLoading(true);

    apiServiceSearchData(value)
      .then(data => setWeatherCity([...weatherCity, { ...data }]))

      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [value]);

  return (
    <WeatherForm>
      <Title>Weather</Title>
      <SearchBar
        onSubmit={handleSubmit}
        onAddCity={addCity}
        weather={weather}
      />

      <WeatherList cities={weatherCity} />
      {isLoading && <Loader />}
    </WeatherForm>
  );
};
