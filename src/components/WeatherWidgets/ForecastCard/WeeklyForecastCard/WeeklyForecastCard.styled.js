import styled from '@emotion/styled';

export const Container = styled.li`
  border-bottom: 1px solid transparent;
  border-color: #6382af;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 1279px) {
    border-bottom: none;
  }
`;

export const Block = styled.ul`
  list-style: none;
  /* padding-left: 6px; */
  display: grid;
  justify-items: center;

  grid-template-areas:
    'weekDay blockTemp'
    'itemWeatherImg blockTemp'
    'itemWeatherImg blockTemp'
    'itemWeatherImg blockTemp';

  /* display: flex;
  align-items: center;
  justify-content: space-around; */

  /* padding: 5px 0; */
  /* height: 100%; */

  /* @media screen and (max-width: 380px) {
    padding-left: 0;
  } */

  @media screen and (min-width: 1279px) {
    flex-direction: column;
    border: none;
    justify-items: start;
    /* padding: 0; */

    grid-template-areas:
      'weekDay weekDay'
      /* 'weekDay blockTemp' */
      'itemWeatherImg blockTemp'
      'itemWeatherImg blockTemp';
    /* 'itemWeatherImg blockTemp'; */

    gap: 8px;

    align-items: center;
  }
`;

export const ItemWeekDay = styled.li`
  grid-area: weekDay;
`;

export const ItemWeatherImg = styled.li`
  grid-area: itemWeatherImg;
`;

export const BlockTemp = styled.li`
  grid-area: blockTemp;
`;

export const ImgDate = styled.img`
  grid-area: weatherImg;
`;

export const MaxTemp = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MinTemp = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;

  /* @media screen and (min-width: 1279px) {
    margin: 0;
  } */
`;

export const Text = styled.p`
  color: #6382af;
`;
