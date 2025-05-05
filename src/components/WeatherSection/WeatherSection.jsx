import { memo, useContext, useState, useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import LocationWeather from '../LocationWeather/LocationWeather';
import { WeatherWidgets } from '../WeatherWidgets/WeatherWidgets';
import { HomePageContext } from 'pages/Homepage';

import { Section, Container } from './WeatherSection.styled';

const ANIMATION_DURATION = 300;

const transitionStyles = {
  initial: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: `opacity ${ANIMATION_DURATION}ms, transform ${ANIMATION_DURATION}ms`,
  },
  entered: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: `opacity ${ANIMATION_DURATION}ms, transform ${ANIMATION_DURATION}ms`,
  },
  exited: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: `opacity ${ANIMATION_DURATION}ms, transform ${ANIMATION_DURATION}ms`,
  },
};

export const WeatherSection = memo(() => {
  const nodeRef = useRef(null);
  const {
    locationForecast,
    forecastSection,
    locationWeather,
    weatherSection,
    withAnimation,
  } = useContext(HomePageContext);

  const [showComponent, setShowComponent] = useState(false);
  const [showWeatherSection, setShowWeatherSection] = useState(weatherSection);
  const [showForecastSection, setShowForecastSection] =
    useState(forecastSection);

  // WeatherSection.whyDidYouRender = true;

  useEffect(() => {
    setShowComponent(false);

    const timer = setTimeout(() => {
      setShowWeatherSection(weatherSection);
      setShowForecastSection(forecastSection);

      setShowComponent(true);
    }, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, [forecastSection, weatherSection]);

  const WeatherContent = (
    <>
      {showWeatherSection && Object.keys(showWeatherSection).length ? (
        <LocationWeather weather={showWeatherSection} />
      ) : (
        <LocationWeather weather={locationWeather} />
      )}
      {showForecastSection && Object.keys(showWeatherSection).length ? (
        <WeatherWidgets
          weather={showWeatherSection}
          forecast={forecastSection}
        />
      ) : (
        <WeatherWidgets weather={locationWeather} forecast={locationForecast} />
      )}
    </>
  );

  return (
    <Section>
      <Transition
        in={withAnimation ? showComponent : true}
        timeout={ANIMATION_DURATION}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <Container
            style={{
              ...transitionStyles.initial,
              ...(state === 'entered' && transitionStyles.entered),
              ...(state === 'exited' && transitionStyles.exited),
            }}
            ref={nodeRef}
          >
            {WeatherContent}
          </Container>
        )}
      </Transition>
    </Section>
  );
});
