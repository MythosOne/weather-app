import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherForm, Title } from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import { apiServiceSearchData } from '../../Api/apiService';

export const WeatherCity = ({ weather }) => {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');
  const [weatherCity, setWeatherCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(`cities: ${cities}`);
  console.log(`value:${value}`);

  const handleSubmit = (value) => {
    setValue(value);
    setCities([]);
  };
// !!!!!!!!!!!!!!!!!
  const addCity = city => {
    if (city.length === 0) {
      alert('Field must be filled');
    } else {
      setCities([...cities, { id: nanoid(), city }]);
    }
  };
//!!!!!!!!!!!!!!!!!
  useEffect(() => {
    if (value.trim() === '') {
      return;
    }
    
    setIsLoading(true);

    apiServiceSearchData(value)
      .then(weatherCity => setWeatherCity(weatherCity))
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
      <WeatherList cities={cities} weatherCity={weatherCity} />
    </WeatherForm>
  );
};
