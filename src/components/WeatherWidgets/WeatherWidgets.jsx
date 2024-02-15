import {
  Container,
  WeatherForecast,
  Precipitation,
  Sunrise,
  Wind,
  Visibility,
  Humidity,
} from './WeatherWidgets.styled';

import { WiSunrise, WiSunset } from 'react-icons/wi';

export const WeatherWidgets = ({ weather, forecast }) => {
  const UTCTime = unixTime => {
    let time = new Date(unixTime * 1000);
    return `${time.getUTCHours().toString().padStart(2, '0')}:${time
      .getUTCMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <Container>
      <WeatherForecast>{forecast} Weekly forecast</WeatherForecast>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '10px',
          width: '95%',
        }}
      >
        <Precipitation>Precipitation</Precipitation>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '10px',
            width: '310px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          <Sunrise>
            <WiSunrise style={{ width: '24px', height: '24px' }} />
            Sunrise {UTCTime(weather.sys.sunrise)}
            {/* {new Date(weather.sys.sunrise * 1000).toUTCString()} */}
            <WiSunset style={{ width: '24px', height: '24px' }} />
            Sunset {UTCTime(weather.sys.sunset)}
            {/* Sunset {new Date(weather.sys.sunset * 1000).toUTCString()} */}
          </Sunrise>
          <Wind>Wind {weather.wind.speed} m/s</Wind>
          <Visibility>Visibility {weather.visibility}</Visibility>
          <Humidity>Humdity {weather.main.humidity}</Humidity>
        </ul>
      </div>
    </Container>
  );
};
