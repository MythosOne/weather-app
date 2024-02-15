import React from 'react';
import { Logo } from './Logo/Logo';
import { Section, MenuBtn } from './Header.styled';
import { MenuBurgerImg } from 'icons/IconComponent.jsx';

export const Header = () => {
  return (
    <Section>
      <MenuBtn
        type="button"
        aria-label="burger-menu"
        title="Menu"
        onClick={() => {
          console.log('Menu open');
        }}
      >
        <MenuBurgerImg />
      </MenuBtn>
      <Logo />
    </Section>
  );
};
