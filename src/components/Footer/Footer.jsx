import React from 'react';
import { Section, Contact } from './Footer.styled';
import { Logo } from '../Header/Logo/Logo';

export const Footer = () => {
  return (
    <Section >
      <Contact>© 2024 All Rights Reserved Developed with by Mythos</Contact>
      <Logo/>
    </Section>
  );
};
