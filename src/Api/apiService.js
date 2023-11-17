import axios from 'axios';

const API_KEY = 'e59a1482d0be237c1680d29670faf7ca';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function apiServiceSearchData(value) {
  const resp = await axios.get(
    `${BASE_URL}/weather?q=${value}&appid=${API_KEY}&units=metric`
  );

  return resp.data;
}

export async function apiServiceWeatherData(lat, lon) {
  const resp = await axios.get(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return resp.data;
}

export async function apiServiceForecastData(lat, lon) {
  const resp = await axios.get(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  return resp.data;
}
