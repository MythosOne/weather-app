import { useEffect, useState, useContext } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import {
  WeatherBar,
  BlockBtn,
  Title,
  ListBtn,
  CloseBtn,
} from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import {
  apiServiceSearchData,
  apiServiceForecastData,
  apiServiceWeatherMaps,
} from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

import { WeatherCityClose, CorrectListImg } from 'icons/IconComponent';
import { HomePageContext } from 'pages/Homepage';

export const WeatherCity = ({
  weather,
  forecastCities,
  setForecastCities,
  isOpen,
  setIsOpen,
}) => {
  // const [value, setValue] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(-100);
  // console.log('first value: ' + JSON.stringify(value));
  // console.log('weatherCities:', weatherCities[0].coord.lon);
  // console.log('WeatherCity- isOpen:', isOpen);
  // console.log('offset:', offset);
  // console.log('searchCity:', searchCity);

  const [onCloseBtn, setOnCloseBtn] = useState(false);
  const [cityId, setCityId] = useState(0);
  // console.log('State CityId:', cityId);

  const { weatherCities, setWeatherCities } = useContext(HomePageContext);
  // console.log("weatherCities:", weatherCities)

  useEffect(() => {
    if (isOpen) {
      // console.log('WeatherCity-useEffect-isOpen:', isOpen);
      return setOffset(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchCity.trim() === '') {
      return;
    }
    const LoweredCase = searchCity.toLowerCase().trim();
    const weatherCity = weatherCities.some(
      city => city.name.toLowerCase().trim() === LoweredCase
    );

    if (weatherCity) {
      alert(`${searchCity} is already in contacts`);
      return;
    }

    setIsLoading(true);

    let lat;
    let lon;

    apiServiceSearchData(searchCity).then(data => {
      setWeatherCities([...weatherCities, { ...data }]);

      lat = data.coord.lat;
      lon = data.coord.lon;

      apiServiceForecastData(lat, lon)
        .then(forecast =>
          setForecastCities([...forecastCities, { ...forecast }])
        )
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    });
    // !!!! WeatherMap
    apiServiceWeatherMaps(lat, lon)
      .then(console.log('first'))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false))
    // !!!! WeatherMap
      .catch(() => alert('City not found'))
      .finally(() => setIsLoading(false));
  }, [searchCity]);

  localStorage.setItem('weatherCities', JSON.stringify(weatherCities));
  localStorage.setItem('forecastCities', JSON.stringify(forecastCities));

  const onDeleteCard = cityId => {
    setCityId(cityId);
    setWeatherCities(weatherCities.filter(({ id }) => id !== cityId));
    // console.log('WeatherCity weatherCities:', weatherCities);
  };

  return (
    <WeatherBar dataOffset={offset}>
      <BlockBtn>
        <ListBtn
          type="button"
          aria-label="list"
          title="List"
          onClick={() => {
            setOnCloseBtn(!onCloseBtn);
          }}
        >
          <CorrectListImg />
        </ListBtn>
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            setOffset(-100);
            setIsOpen(!isOpen);
          }}
        >
          <WeatherCityClose />
        </CloseBtn>
      </BlockBtn>
      <Title>Weather</Title>
      <SearchBar setSearchCity={setSearchCity} weather={weather} />
      <WeatherList onCloseBtn={onCloseBtn} onDeleteCard={onDeleteCard} />
      {isLoading && <Loader />}
    </WeatherBar>
  );
};
