import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* gap: 10px; */
  margin-top: 40px;
  margin-bottom: 10px;
  /* min-height: calc(40vh - 50px); */
`;

export const WeatherForecast = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */
  margin-bottom: 25px;

  backdrop-filter: blur(5px);
`;
export const Precipitation = styled.div`
  width: 340px;
  height: 310px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
export const Sunrise = styled.li`
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
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
export const Visibility = styled.li`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
export const Humidity = styled.li`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);
`;
