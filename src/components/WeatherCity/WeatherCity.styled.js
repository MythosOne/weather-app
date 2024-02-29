import styled from '@emotion/styled';

export const WeatherBar = styled.section`
  grid-area: weatherBar;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;

  width: 70%;
  /* height: 100%; */
  /* min-height: calc(90vh - 50px); */
  /* background-color: rgb(32, 97, 144); */
  /* backdrop-filter: blur(5px); */
  transform: translateX(${props => props.dataOffset}%);
  /* transform: translateX(-100%); */

  @media screen and (min-width: 767px) {
    transform: none;
    /* z-index: none;*/

    position: sticky;
    top: 70px;

    width: 260px;

    border-radius: 12px;
  }

  @media screen and (min-width: 1279px) {
    width: 280px;

    /* background-color: rgba(21, 67, 96, 0.5); */
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;

  margin-bottom: 12px;
  margin-left: 10px;

  text-align: left;
  color: rgba(240, 243, 244, 0.9);;
`;
