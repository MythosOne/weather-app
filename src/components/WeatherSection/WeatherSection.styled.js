import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  margin-top: 30px;
  padding: 5px;
  width: 95%;
  /* height: 400px; */
  /* border-radius: 12px;
  background-color: #154360;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
  opacity: 0.5; */
  font-size: 16px;
  color: white;
`;

export const LocationWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyLocation = styled.h2`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 28px;
  font-weight: 400;
`;

export const City = styled.h2`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 16px;
  font-weight: 400;
`;

export const Temperature = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 58px;
  font-weight: 400;
`;

export const Description = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 18px;
  font-weight: 400;
`;

export const Location = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 16px;
  font-weight: 400;
`;

export const WeatherWidgets = styled.div`
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
  width: 95%;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
  margin-bottom: 25px;
`;
export const Precipitation = styled.div`
  width:310px;
  height:310px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;
export const Sunrise = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;
export const Wind = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;
export const Visibility = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;
export const Humidity = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5);
`;
