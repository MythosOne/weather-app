import React from 'react';
import { LogoWrapper, LogoImg, TitleWeather, TitleApp } from './Logo.styled';

import Image from '../../img/logo-image.png';

export const Logo = () => {
  return (
    <LogoWrapper /*href='#LocationWeather'*/>
      <LogoImg src={Image} width="20" height="20" alt="Logo" />
      <TitleWeather>Weather</TitleWeather>
      <TitleApp>App</TitleApp>
    </LogoWrapper>
  );
};
