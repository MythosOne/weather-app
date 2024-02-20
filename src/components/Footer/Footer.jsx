import React from 'react';
import { Section, ArrowUpBtn, GitLink, Copyright } from './Footer.styled';
import { Logo } from '../Header/Logo/Logo';
import { ArrowUpImg, GitImg } from 'icons/IconComponent';

export const Footer = () => {
  return (
    <Section>
      <Logo />
      <ArrowUpBtn href="#LocationWeather" title="Top of page">
        <ArrowUpImg />
      </ArrowUpBtn>
      <GitLink
        href="https://github.com/MythosOne"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitImg />
      </GitLink>
      <Copyright>© 2024 All Rights Reserved Developed with by Mythos</Copyright>
    </Section>
  );
};
