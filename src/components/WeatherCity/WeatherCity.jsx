import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherForm, Title } from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import { apiServiceSearchData } from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

export const WeatherCity = ({ weather }) => {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem('cities')) ?? []
  );
  const [value, setValue] = useState('');
  // const [weatherCity, setWeatherCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(cities);
  // console.log(`value:${value}`);
  // console.log(weatherCity);

  const handleSubmit = value => {
    setValue(value);
    // setCities([]);
  };
  // !!!!!!!!!!!!!!!!!
  const addCity = city => {
    if (city.length === 0) {
      alert('Field must be filled');
    } /*else {
      setCities([...cities, { id: nanoid(), weatherCity }]);
    }*/
  };
  //!!!!!!!!!!!!!!!!!
  useEffect(() => {
    //!!!!!!!!!!!!!!
    localStorage.setItem('cities', JSON.stringify(cities));

    if (value.trim() === '') {
      return;
    }

    setIsLoading(true);

    apiServiceSearchData(value)
      .then(weatherCity => setCities([...cities, { ...weatherCity }]))
      // .then(weatherCity => setWeatherCity(weatherCity))
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
      {/* {cities.map(city => (
        <WeatherCard weather={weather} />
      ))} */}
      <WeatherList cities={cities}  />
      {isLoading && <Loader />}
    </WeatherForm>
  );
};
