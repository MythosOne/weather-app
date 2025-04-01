import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
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
  const {
    locationForecast,
    forecastSection,
    locationWeather,
    weatherSection,
    handlerSelectWeatherCity,
  } = useContext(HomePageContext);

  const [showComponent, setShowComponent] = useState(false);
  const [showWeatherSection, setShowWeatherSection] = useState(weatherSection);
  const [showForecastSection, setShowForecastSection] =
    useState(forecastSection);

  // useEffect(() => {
  //   console.log('nodeRef.current WeatherSection:', nodeRef.current);
  // }, [showComponent]);

  useLayoutEffect(() => {
    setShowComponent(true);
    setShowWeatherSection(true);
    setShowForecastSection(true);
  }, []);

  useEffect(() => {
    setShowComponent(false);

    setTimeout(() => {
      setShowWeatherSection(weatherSection);
      setShowForecastSection(forecastSection);

      setShowComponent(true);
    }, 300);
  }, [handlerSelectWeatherCity]);

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
            {showWeatherSection && Object.keys(showWeatherSection).length ? (
              <LocationWeather weather={showWeatherSection} />
            ) : (
              <LocationWeather weather={locationWeather} />
            )}
            {showForecastSection && Object.keys(showWeatherSection).length ? (
              <WeatherWidgets
                weather={showWeatherSection}
                forecast={showForecastSection}
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
