import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  gap: 10px;

  grid-template-columns: minmax(100px, 1fr);

  grid-template-areas:
    'hourlyForecast hourlyForecast hourlyForecast'
    'weeklyForecast precipitation precipitation'
    'weeklyForecast precipitation precipitation'
    'weeklyForecast wind sunrise'
    'weeklyForecast visibility humidity';

  list-style: none;

  @media screen and (min-width: 767px) {
    justify-content: space-between;

    grid-template-areas:
      'hourlyForecast hourlyForecast hourlyForecast'
      'weeklyForecast precipitation precipitation'
      'weeklyForecast precipitation precipitation'
      'weeklyForecast sunrise wind'
      'weeklyForecast visibility humidity';
  }
`;

export const HourlyForecast = styled.li`
  grid-area: hourlyForecast;

  width: 100%;
  height: 100px;

  @media screen and (min-width: 767px) {
    width: 100%;
    height: 120px;
  }

  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
`;

export const WeeklyForecast = styled.li`
  grid-area: weeklyForecast;

  width: 100%;

  @media screen and (min-width: 767px) {
    width: 180px;
  }

  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */
  /* margin-bottom: 25px; */

  backdrop-filter: blur(5px);
`;
export const Precipitation = styled.li`
  grid-area: precipitation;

  width: 210px;
  height: 200px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);

  @media screen and (min-width: 767px) {
    width: 270px;
    height: 270px;
  }
`;

export const Sunrise = styled.li`
  grid-area: sunrise;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;
  }

  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 10px;

  color: #e7ecee;
  text-align: center;
  /* font-family: Oswald; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 48px; */
  /* text-transform: uppercase; */
`;

export const Wind = styled.li`
  grid-area: wind;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;
  }

  backdrop-filter: blur(5px);

  color: #e7ecee;
  text-align: center;
  /* font-family: Oswald; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Visibility = styled.li`
  grid-area: visibility;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;
  }

  backdrop-filter: blur(5px);

  color: #e7ecee;
  text-align: center;
  /* font-family: Oswald; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Humidity = styled.li`
  grid-area: humidity;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;
  }

  backdrop-filter: blur(5px);

  color: #e7ecee;
  text-align: center;
  /* font-family: Oswald; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
