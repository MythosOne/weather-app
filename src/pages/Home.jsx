import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { MyLocationWeather } from '../components/MyLocationWeather/MyLocationWeather';
import { useEffect } from 'react';
import {getWeatherData} from '../Api/apiService';

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
  useEffect(() => {
    getWeatherData()
    .then()
    .catch()
    .finally()
  },[]);

  return (
    <section style={styles.container}>
      <WeatherCity />
      <MyLocationWeather />
    </section>
  );
};

export default Home;
