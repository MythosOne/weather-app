import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { MyLocationWeather } from '../components/MyLocationWeather/MyLocationWeather';
import { useEffect, useState } from 'react';
import {getLocationWeatherData } from '../Api/apiService';
import { Loader } from '../components/Loader/Loader';

const styles = {
  container: {
    minHeight: 'calc(80vh - 50px)',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Home = () => {
  const [weather, setWeather] = useState(JSON.parse(localStorage.getItem('weather')) ?? {});
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  console.log(location);
  console.log(weather)
  const { latitude, longitude } = location;

  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(weather));
    setIsLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert('Geolocation is not supported by your browser');
    }

    if (latitude !== null && longitude !== null) {
      getLocationWeatherData(latitude, longitude)
        .then((weather) => setWeather(weather))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [latitude, longitude]);

  // console.log(weather)

  return (
    <section style={styles.container}>
      <WeatherCity weather={weather} />
      <MyLocationWeather weather={weather} />
      {isLoading && <Loader />}
    </section>
  );
};

export default Home;
