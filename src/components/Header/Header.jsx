import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { Section, MenuBtn, Clock } from './Header.styled';
import { MenuBurgerImg } from 'icons/IconComponent.jsx';

export const Header = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // console.log('isOpen', isOpen);

  const currentDate = new Date();
  const hh = currentDate.getHours();
  const min = currentDate.getMinutes();
  const day = currentDate.getDate();
  const dayOfWeek = currentDate.getDay();
  const year = currentDate.getFullYear();

  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dayName = daysOfWeek[dayOfWeek];

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
      <Clock>{`${hh}:${min} ${day} ${dayName}  ${year}`}</Clock>
      <Logo />
    </Section>
  );
};
