import React, { useEffect, useState } from 'react';
import {
  Container,
  Block,
  BlockItem,
  Blockweather,
  City,
  Time,
  WeatherIcon,
  Description,
  Temperature,
  Location,
  CloseBtn,
  // FadeInComponent,
} from './WeatherCard.styled';

import { CloseCardImg } from 'icons/IconComponent';
// import { CSSTransition } from 'react-transition-group';

function WeatherCard({ weatherCity, onCloseBtn, onDeleteCard }) {
  // const [onCloseBtn, setOnCloseBtn] = useState(false);
  // console.log("onCloseBtn:", onCloseBtn)
  // console.log(weatherCity);
  // console.log((new Date(weatherCity.dt * 1000)).getTimezoneOffset() / 60)
  // !!!!! The time is shown incorrectly, correct it...
  // const UTCTime = () => {
  //   let time = new Date(weatherCity.dt*1000);
  //   return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // };
  // let timezone = weatherCity.dt + weatherCity.timezone;
  // console.log(timezone)
  const [currentTime, setCurrentTime] = useState(new Date());
  // console.log(currentTime);

  const iconUrl = `http://openweathermap.org/img/w/${weatherCity.weather[0].icon}.png`;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const timeWithOffset = new Date(utcTime + weatherCity.timezone * 1000);

      setCurrentTime(timeWithOffset);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [showComponent, setShowComponent] = useState(false);
  // console.log('showComponent:', showComponent);

  useEffect(() => {
    setShowComponent(!showComponent);
    // console.log(showComponent)
  }, []);

  return (
    <Container className={showComponent ? 'active' : 'exit-active'}>
      <Block>
        <BlockItem>
          <City>{weatherCity.name}</City>
          <Time>
            {/* {(new Date(weatherCity.dt * 1000)).toUTCString()} */}
            {`${currentTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}`}
          </Time>
        </BlockItem>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </Block>
      <Block>
        <Blockweather>
          <WeatherIcon src={iconUrl} width="32" alt="Weather icon" />
          <Description>{weatherCity.weather[0].description}</Description>
        </Blockweather>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)}° L:
          {Math.trunc(weatherCity.coord.lon)}°
        </Location>
      </Block>
      {onCloseBtn && (
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            onDeleteCard(weatherCity.id);
          }}
          className={onCloseBtn ? 'active' : ''}
        >
          <CloseCardImg />
        </CloseBtn>
      )}
    </Container>
  );
}

export default WeatherCard;
