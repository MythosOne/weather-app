import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Section, MenuBtn } from './Header.styled';
import { MenuBurgerImg } from 'icons/IconComponent.jsx';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('isOpen', isOpen);

  return (
    <Section>
      <MenuBtn
        type="button"
        aria-label="burger-menu"
        title="Menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MenuBurgerImg />
      </MenuBtn>
      <Logo />
    </Section>
  );
};
