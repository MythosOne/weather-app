import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherBar, Title } from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import { apiServiceSearchData } from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

export const WeatherCity = ({ weather, weatherCity, setWeatherCity, isOpen }) => {
  // const [weatherCity, setWeatherCity] = useState(
  //   JSON.parse(localStorage.getItem('weatherCity')) ?? []
  // );
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset]= useState(-100);
  console.log("first value: " + JSON.stringify(value))
  console.log('weatherCity:', weatherCity);
  console.log("isOpen:", isOpen);

  // !!!!!!!!!!!!!!!!
  const handleSubmit = value => {
    setValue(value.toLowerCase());
  };

  const addCity = city => {
    if (city.length === 0) {
      alert('Field must be filled');
    }
  };

  const handleClose = () => setOffset(-100);

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

      if(isOpen){
        setOffset(100);
      }
  }, [value, isOpen]);

  return (
    <WeatherBar dataOffset={offset} handleClose={handleClose}>
      <Title>Weather</Title>
      <SearchBar
        onSubmit={handleSubmit}
        onAddCity={addCity}
        weather={weather}
      />
      <WeatherList cities={weatherCity} />
      {isLoading && <Loader />}
    </WeatherBar>
  );
};
