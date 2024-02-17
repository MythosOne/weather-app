import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  grid-template-areas: 
    "forecast forecast"
    "precipitation precipitation"
    "sunrise wind"
    "visibility humidity" 
  ;
  /* flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px; */
  gap: 20px;
  list-style: none;
`;

export const WeatherForecast = styled.li`
  grid-area: forecast;

  width: 100%;
  height: 350px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */
  /* margin-bottom: 25px; */

  backdrop-filter: blur(5px);
`;
export const Precipitation = styled.li`
  grid-area: precipitation;

  width: 100%;
  height: 350px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
export const Sunrise = styled.li`
  grid-area: sunrise;

  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 10px;

  color: #e7ecee;
  text-align: center;
  /* font-family: Oswald; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  /* text-transform: uppercase; */
`;
export const Wind = styled.li`
  grid-area: wind;

  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
export const Visibility = styled.li`
  grid-area: visibility;

  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
export const Humidity = styled.li`
  grid-area: humidity;

  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
