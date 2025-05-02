import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import { Clock } from 'components/Clock/Clock';

import {
  Container,
  Block,
  BlockItem,
  BlockWeather,
  City,
  WeatherIcon,
  Description,
  Temperature,
  Location,
  BlockBtn,
  CloseBtn,
} from './WeatherCard.styled';

import { CloseCardImg } from 'icons/IconComponent';

const styles = {
  initial: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 300ms, transform 300ms',
  },
  entered: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 300ms, transform 300ms',
  },
  exited: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 300ms, transform 300ms',
  },
};

function WeatherCard({ weatherCity, onCloseBtn, onDeleteCard }) {
  const buttonRef = useRef(null);
  const [showComponent, setShowComponent] = useState(false);
  const [currentCloseButton, setCurrentCloseButton] = useState(onCloseBtn);

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const iconUrl = `https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`;

  useEffect(() => {
    setShowComponent(true);
  }, []);

  useEffect(() => {
    setIsButtonVisible(Boolean(onCloseBtn));

    setTimeout(() => {
      setCurrentCloseButton(onCloseBtn);
    }, 300);
  }, [onCloseBtn]);

  return (
    <Container className={showComponent ? 'active' : 'exit-active'}>
      <Block>
        <BlockItem>
          <City>{weatherCity.name}</City>
          <Clock
            timeZoneOffset={weatherCity.timezone}
            clockWeatherCard={true}
          />
        </BlockItem>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </Block>
      <Block>
        <BlockWeather>
          <WeatherIcon
            src={iconUrl}
            width="32"
            height="32"
            alt="weather-icon"
          />
          <Description>{weatherCity.weather[0].description}</Description>
        </BlockWeather>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)}° L:
          {Math.trunc(weatherCity.coord.lon)}°
        </Location>
      </Block>
      <Transition
        nodeRef={buttonRef}
        in={isButtonVisible}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <BlockBtn
            ref={buttonRef}
            style={{
              ...styles.initial,
              ...(state === 'entered' && styles.entered),
              ...(state === 'exited' && styles.exited),
            }}
          >
            {currentCloseButton && (
              <CloseBtn
                ref={buttonRef}
                type="button"
                aria-label="close"
                title="Close"
                onClick={() => {
                  setIsButtonVisible(false);
                  setShowComponent(false);
                  setTimeout(() => onDeleteCard(weatherCity.id), 300);
                }}
              >
                <CloseCardImg />
              </CloseBtn>
            )}
          </BlockBtn>
        )}
      </Transition>
    </Container>
  );
}

WeatherCard.propTypes = {
  weatherCity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
    timezone: PropTypes.number.isRequired,
  }).isRequired,
  onCloseBtn: PropTypes.bool.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default WeatherCard;
