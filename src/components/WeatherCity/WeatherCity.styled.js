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
  background-color: #1f618d;
  /* backdrop-filter: blur(5px); */
  transform: translateX(${props => props.dataOffset}%);
  /* transform: translateX(-100%); */

  @media screen and (min-width: 767px) {
    transform: none;
    /* z-index: none;*/

    position: static;

    width: 260px;

    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  color: #fff;
`;
