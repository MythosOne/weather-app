import React, { useEffect, useState } from 'react';
import {
  Container,
  Block,
  BlockItem,
  City,
  Time,
  Description,
  Temperature,
  Location,
  CloseBtn,
  // FadeInComponent,
} from './WeatherCard.styled';

import { CloseCardImg } from 'icons/IconComponent';

// import { CSSTransition } from 'react-transition-group';

function WeatherCard({ weatherCity, onCloseBtn, onDeleteCard, }) {
  // const [onCloseBtn, setOnCloseBtn] = useState(false);
  // console.log("onCloseBtn:", onCloseBtn)
  // console.log(weatherCity);
  // console.log((new Date(weatherCity.dt * 1000)).getTimezoneOffset() / 60)
  // Неправильно показывает время, исправить.
  const UTCTime = () => {
    let time = new Date(weatherCity.dt * 1000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  const [showComponent, setShowComponent] = useState(false);
  // console.log('showComponent:', showComponent);

  useEffect(() => {
    setShowComponent(!showComponent);
  }, []);

  return (
    <Container className={showComponent ? 'active' : ''}>
      <Block>
        <BlockItem>
          <City>{weatherCity.name}</City>
          <Time>
            {/* {(new Date(weatherCity.dt * 1000)).toUTCString()} */}
            {UTCTime()}
          </Time>
        </BlockItem>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </Block>
      <Block>
        <Description>{weatherCity.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)} L:
          {Math.trunc(weatherCity.coord.lon)}
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
