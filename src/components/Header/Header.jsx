import PropTypes from 'prop-types';
import { Logo } from './Logo/Logo';
import { Clock } from '../Clock/Clock';

import { Section, MenuBtn, ClockWrapper, CurrentDate } from './Header.styled';
import { MenuBurgerImg } from 'icons/IconComponent.jsx';

export const Header = ({ isOpen, setIsOpen }) => {
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const timeZoneOffset = currentDate.getTimezoneOffset();

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
      <ClockWrapper>
        <Clock timeZoneOffset={timeZoneOffset} clockHeader={true} />
        <CurrentDate>{`${formattedDate.toLocaleString('en-US')}`}</CurrentDate>
      </ClockWrapper>
      <Logo />
    </Section>
  );
};

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
