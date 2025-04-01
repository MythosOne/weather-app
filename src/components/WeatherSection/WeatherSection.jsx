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
  const { locationForecast, forecastSection, locationWeather, weatherSection, handlerSelectWeatherCity } =
    useContext(HomePageContext);

  const [showComponent, setShowComponent] = useState(false);
  const [showWeatherSection, setShowWeatherSection] = useState(false);
  const [showForecastSection, setShowForecastSection] = useState(false);

  console.log("showComponent", showComponent);
  console.log('showWeatherSection', showWeatherSection);
  console.log('showForecastSection', showForecastSection);

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
      setShowWeatherSection(true);
      setShowForecastSection(true);
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
            {showWeatherSection && Object.keys(weatherSection).length ? (
              <LocationWeather weather={weatherSection} />
            ) : (
              <LocationWeather weather={locationWeather} />
            )}
            {showForecastSection && Object.keys(weatherSection).length ? (
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
