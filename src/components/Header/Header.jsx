import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Section, MenuBtn, Clock } from './Header.styled';
import { MenuBurgerImg } from 'icons/IconComponent.jsx';

export const Header = ({isOpen, setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // console.log('isOpen', isOpen);

  return (
    <Section>
      <MenuBtn
        type="button"
        aria-label="burger-menu"
        title="Menu"
        onClick={() => {
          console.log('Header-isOpen', isOpen);
          setIsOpen(!isOpen);
        }}
      >
        <MenuBurgerImg />
      </MenuBtn>
      <Clock>Date and Time</Clock>
      <Logo />
    </Section>
  );
};
