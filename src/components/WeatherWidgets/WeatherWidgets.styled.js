import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  gap: 10px;

  grid-template-columns: minmax(100px, 1fr);

  grid-template-areas:
    'hourlyForecast hourlyForecast hourlyForecast'
    'weeklyForecast precipitationMap precipitationMap'
    'weeklyForecast precipitationMap precipitationMap'
    'weeklyForecast wind sunrise'
    'weeklyForecast visibility humidity';

  list-style: none;

  @media screen and (min-width: 767px) {
    justify-content: space-between;

    grid-template-areas:
      'hourlyForecast hourlyForecast hourlyForecast'
      'weeklyForecast precipitationMap precipitationMap'
      'weeklyForecast precipitationMap precipitationMap'
      'weeklyForecast sunrise wind'
      'weeklyForecast visibility humidity';
  }

  @media screen and (min-width: 1279px) {
    grid-template-areas:
      'hourlyForecast hourlyForecast  hourlyForecast hourlyForecast'
      'weeklyForecast weeklyForecast  weeklyForecast weeklyForecast'
      'precipitationMap precipitation sunrise wind'
      'precipitationMap pressure visibility humidity';

    gap: 20px;
  }
`;

export const HourlyForecast = styled.li`
  grid-area: hourlyForecast;
  /* overflow: auto; */

  box-sizing: border-box;
  padding: 8px;

  width: 100%;
  height: 115px;

  @media screen and (min-width: 767px) {
    width: 100%;
    height: 120px;
  }

  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
`;

export const BlockHeader = styled.div`
  width: 100%;
  text-align: start;
  font-size: 10px;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: #6382af;
  padding-bottom: 5px;

  border-bottom: 1px solid transparent;
  border-color: #6382af;
`;

export const BlockHourlyWater = styled.ul`
  margin: 10px auto;
  width: max-content;
  list-style: none;
  display: flex;
  gap: 15px;

  @media screen and (min-width: 767px) {
    width: auto;
    justify-content: space-around;
  }
`;

export const WeeklyForecast = styled.li`
  grid-area: weeklyForecast;

  box-sizing: border-box;
  padding: 8px;

  width: 100%;

  @media screen and (min-width: 767px) {
    width: 180px;
  }

  @media screen and (min-width: 1279px) {
    width: 100%;
    height: 120px;
  }

  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */
  /* margin-bottom: 25px; */

  backdrop-filter: blur(5px);
`;

export const BlockWeeklyWater = styled.div``;

export const PrecipitationMap = styled.li`
  grid-area: precipitationMap;

  box-sizing: border-box;
  padding: 8px;

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

  @media screen and (min-width: 1279px) {
    width: 280px;
    height: 280px;
  }
`;

export const Sunrise = styled.li`
  grid-area: sunrise;

  box-sizing: border-box;
  padding: 8px;

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
  justify-content: center;

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

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

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

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

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

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 16px;

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

export const Precipitation = styled.li`
  display: none;
  grid-area: precipitation;

  box-sizing: border-box;
  padding: 8px;

  @media screen and (min-width: 1279px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 16px;

    width: 130px;
    height: 130px;

    border-radius: 12px;
    background-color: rgba(21, 67, 96, 0.5);
    backdrop-filter: blur(5px);
  }
`;

export const Pressure = styled.li`
  display: none;
  grid-area: pressure;

  box-sizing: border-box;
  padding: 8px;

  @media screen and (min-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    width: 130px;
    height: 130px;

    border-radius: 12px;
    background-color: rgba(21, 67, 96, 0.5);
    backdrop-filter: blur(5px);
  }
`;
