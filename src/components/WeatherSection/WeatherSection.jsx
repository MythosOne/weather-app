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
  const { locationForecast, forecastSection, locationWeather, weatherSection } =
    useContext(HomePageContext);

  // const [showComponent, setShowComponent] = useState(true);
  // console.log('showComponent WeatherSection:', showComponent);

  // useEffect(() => {
  //   console.log('nodeRef.current WeatherSection:', nodeRef.current);
  // }, [showComponent]);

  return (
    <Section>
      <Transition
        nodeRef={nodeRef}
        in={true}
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
