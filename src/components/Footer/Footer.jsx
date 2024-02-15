import React from 'react';
import { Section, Contact } from './Footer.styled';
import { Logo } from '../Header/Logo/Logo';

export const Footer = () => {
  return (
    <Section style={{display:"none"}}>
      <Contact>Contact</Contact>
      <Logo/>
    </Section>
  );
};
