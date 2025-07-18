import {
  memo,
  useEffect,
  useState,
  createContext,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { Transition } from 'react-transition-group';
import { Toaster } from 'react-hot-toast';
import { errorHandler } from 'error/errorHandler';

import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { WeatherSection } from '../components/WeatherSection/WeatherSection';
import {
  apiServiceWeatherData,
  apiServiceForecastData,
} from '../Api/apiService';
import { Loader } from '../components/Loader/Loader';
import { Main, Container } from './Homepage.styled';

export const HomePageContext = createContext();

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
    willChange: 'opacity, transform',
  },
  exited: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: `opacity ${ANIMATION_DURATION}ms, transform ${ANIMATION_DURATION}ms`,
  },
};

export const Homepage = memo(
  ({ location, isOpen, setIsOpen, setIsHomepageLoaded }) => {
    const nodeRef = useRef(null);
    const [showHomePage, setShowHomePage] = useState(false);
    const [withAnimation, setWithAnimation] = useState(false);

    //!!!State weather cities
    const [weatherCities, setWeatherCities] = useState(
      JSON.parse(localStorage.getItem('weatherCities')) ?? []
    );
    const [forecastCities, setForecastCities] = useState(
      JSON.parse(localStorage.getItem('forecastCities')) ?? []
    );

    //!!! state location weather
    const [locationWeather, setLocationWeather] = useState(
      JSON.parse(localStorage.getItem('locationWeather')) ?? {}
    );
    const [locationForecast, setLocationForecast] = useState(
      JSON.parse(localStorage.getItem('locationForecast')) ?? {}
    );

    //!!! state weather section
    const [weatherSection, setWeatherSection] = useState(
      JSON.parse(localStorage.getItem('weatherSection')) ?? {}
    );

    const [forecastSection, setForecastSection] = useState(
      JSON.parse(localStorage.getItem('forecastSection')) ?? {}
    );

    const [isLoading, setIsLoading] = useState(false);

    const [currentWeatherCityId, setCurrentWeatherCityId] = useState(null);

    const [offset, setOffset] = useState(-100);

    const { latitude, longitude } = location;

    // Homepage.whyDidYouRender = true;

    useEffect(() => {
      fetchLocationData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [latitude, longitude]);

    useEffect(() => {
      fetchCitiesData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      let selectedWeatherCity;
      let selectedForecastCity;

      if (currentWeatherCityId !== null) {
        selectedWeatherCity = weatherCities.find(
          city => city.id === currentWeatherCityId
        );
        selectedForecastCity = forecastCities.find(
          city => city.city.id === currentWeatherCityId
        );
      } else if (currentWeatherCityId === null) {
        selectedWeatherCity = weatherCities[weatherCities.length - 1];
        selectedForecastCity = forecastCities[forecastCities.length - 1];
      }

      if (selectedWeatherCity) {
        setWeatherSection(selectedWeatherCity);
      }

      if (selectedForecastCity) {
        setForecastSection(selectedForecastCity);
      }

      localStorage.setItem('weatherCities', JSON.stringify(weatherCities));
      localStorage.setItem('forecastCities', JSON.stringify(forecastCities));
    }, [currentWeatherCityId, forecastCities, weatherCities]);

    useEffect(() => {
      if (isOpen) {
        return setOffset(0);
      }
    }, [isOpen]);

    const fetchLocationData = async () => {
      if (!latitude && !longitude) {
        return;
      }
      setIsLoading(true);

      try {
        const [weather, forecast] = await Promise.all([
          apiServiceWeatherData(latitude, longitude),
          apiServiceForecastData(latitude, longitude),
        ]);

        setLocationWeather({
          ...weather,
          myLocation: true,
        });

        setLocationForecast(forecast);

        localStorage.setItem('locationWeather', JSON.stringify(weather));
        localStorage.setItem('locationForecast', JSON.stringify(forecast));
      } catch (error) {
        errorHandler({
          message: 'Error fetching weather data',
        });
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCitiesData = async () => {
      if (weatherCities.length === 0 && forecastCities === 0) {
        return;
      }
      setIsLoading(true);

      try {
        const updatedWeatherCities = await Promise.all(
          weatherCities.map(async weatherCity => {
            const { lat, lon } = weatherCity.coord;
            const weather = await apiServiceWeatherData(lat, lon);
            return {
              ...weatherCity,
              ...weather,
            };
          })
        );

        const updatedForecastCities = await Promise.all(
          forecastCities.map(async forecastCity => {
            const { lat, lon } = forecastCity.city.coord;
            const forecast = await apiServiceForecastData(lat, lon);
            return {
              ...forecastCity,
              ...forecast,
            };
          })
        );
        setWeatherCities(updatedWeatherCities);
        setForecastCities(updatedForecastCities);

        localStorage.setItem(
          'weatherCities',
          JSON.stringify(updatedWeatherCities)
        );
        localStorage.setItem(
          'forecastCities',
          JSON.stringify(updatedForecastCities)
        );

        setShowHomePage(true);
      } catch (error) {
        errorHandler({
          message: 'Error fetching weather data',
        });
      } finally {
        setIsLoading(false);
      }
    };

    const handlerSelectWeatherCity = cityId => setCurrentWeatherCityId(cityId);

    const { myLocation } = locationWeather;

    const contextValue = useMemo(
      () => ({
        weatherCities,
        setWeatherCities,
        handlerSelectWeatherCity,
        setWeatherSection,
        setCurrentWeatherCityId,
        locationForecast,
        forecastSection,
        locationWeather,
        weatherSection,
        withAnimation,
        setWithAnimation,
      }),
      [
        weatherCities,
        locationForecast,
        forecastSection,
        locationWeather,
        weatherSection,
        withAnimation,
      ]
    );

    const toasterOptions = useCallback(() => {
      return {
        toastOptions: {
          duration: 3000,
          style: {
            background: '#c9dfed',
            color: '#rgba(21, 67, 96, 0.5)',
            fontSize: '16px',
            fontWeight: '500',
          },
        },
      };
    }, []);

    return (
      <>
        {myLocation && (
          <Main>
            <Transition
              in={showHomePage}
              timeout={ANIMATION_DURATION}
              nodeRef={nodeRef}
              onEntered={() => {
                setIsHomepageLoaded(true);
              }}
              appear
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
                  <HomePageContext.Provider value={contextValue}>
                    {Object.keys(locationWeather).length && (
                      <WeatherCity
                        weather={locationWeather}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        forecastCities={forecastCities}
                        setForecastCities={setForecastCities}
                        offset={offset}
                        setOffset={setOffset}
                        setCurrentWeatherCityId={setCurrentWeatherCityId}
                        setWeatherSections={setWeatherSection}
                      />
                    )}
                    {Object.keys(locationWeather).length &&
                      Object.keys(locationForecast).length && (
                        <WeatherSection />
                      )}
                    {isLoading && <Loader />}
                  </HomePageContext.Provider>
                </Container>
              )}
            </Transition>
            <Toaster toastOptions={toasterOptions} />
          </Main>
        )}
      </>
    );
  }
);
