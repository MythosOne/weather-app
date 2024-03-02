import styled from '@emotion/styled';

export const WeatherBar = styled.section`
  grid-area: weatherBar;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;

  width: 250px;
  height: 100vh;
  /* min-height: calc(90vh - 50px); */
  background-color: #154895;
  /* backdrop-filter: blur(5px); */
  transform: translateX(${props => props.dataOffset}%);
  transition: 0.5s ease;
  /* transform: translateX(-100%); */

  @media screen and (min-width: 767px) {
    transform: none;
    /* z-index: none;*/

    position: sticky;
    top: 70px;

    width: 260px;
    height: 90vh;

    border-radius: 12px;
  }

  @media screen and (min-width: 1279px) {
    width: 280px;
    height: 90vh;

    /* background-color: rgba(21, 67, 96, 0.5); */
  }
`;

export const WeatherHead = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
gap: 90px;

margin-top: 12px;
margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;

  /* margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 10px; */

  text-align: left;
  color: rgba(240, 243, 244, 0.9);

  /* @media screen and (min-width: 767px) {
    margin-top: 0;
  } */
`;

export const CloseBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0;

  cursor: pointer;

  fill: #a3d4ff;

  &:hover {
    fill: #2977bd;

    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
