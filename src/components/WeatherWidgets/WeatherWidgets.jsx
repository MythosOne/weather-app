import {
  Container,
  WeatherForecast,
  Precipitation,
  Sunrise,
  Wind,
  Visibility,
  Humidity,
} from './WeatherWidgets.styled';

export const WeatherWidgets = ({ weather, forecast }) => {
  return (
    <Container>
      <WeatherForecast>{forecast}</WeatherForecast>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '10px',
            width: '310px',
          }}
        >
          <Sunrise>
            Sunrise {weather.sys.sunrise} Sunset {weather.sys.sunset}
          </Sunrise>
          <Wind>Wind {weather.wind.speed} m/s</Wind>
          <Visibility>Visibility {weather.visibility}</Visibility>
          <Humidity>Humdity {weather.main.humidity}</Humidity>
        </div>
      </div>
    </Container>
  );
};
