import React, { useContext, useState, useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import LocationWeather from '../LocationWeather/LocationWeather';
import { WeatherWidgets } from '../WeatherWidgets/WeatherWidgets';
import { Section, Container } from './WeatherSection.styled';
import { HomePageContext } from 'pages/Homepage';

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

export const WeatherSection = () => {
  const nodeRef = useRef(null);
  const [showComponent, setShowComponent] = useState(Boolean);
  console.log('showComponent WeatherSection:', showComponent);

  const { locationForecast, forecastSection, locationWeather, weatherSection } =
    useContext(HomePageContext);

  console.log('weatherSection:', weatherSection.name);
  console.log('forecastSection:', forecastSection.city.name);

  useEffect(() => {
    // setShowComponent(true);
    setShowComponent(false); // Сначала скрываем компонент

  const timer = setTimeout(() => {
    setShowComponent(true); // Затем снова показываем
  }, 10); // Небольшая задержка для корректной работы Transition

  return () => clearTimeout(timer); // Очищаем таймер при изменении данных
  }, [weatherSection, forecastSection]);

  useEffect(() => {
    console.log('nodeRef.current WeatherSection:', nodeRef.current);
  }, [showComponent]);

  return (
    <Section>
      <Transition
        nodeRef={nodeRef}
        in={showComponent}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <Container
            style={{
              ...styles.initial,
              ...(state === 'entered' && styles.entered),
              ...(state === 'exited' && styles.exited),
            }}
            ref={nodeRef}
          >
            {weatherSection && Object.keys(weatherSection).length ? (
              <LocationWeather weather={weatherSection} />
            ) : (
              <LocationWeather weather={locationWeather} />
            )}
            {forecastSection && Object.keys(weatherSection).length ? (
              <WeatherWidgets
                weather={weatherSection}
                forecast={forecastSection}
              />
            ) : (
              <WeatherWidgets
                weather={locationWeather}
                forecast={locationForecast}
              />
            )}
          </Container>
        )}
      </Transition>
    </Section>
  );
};
