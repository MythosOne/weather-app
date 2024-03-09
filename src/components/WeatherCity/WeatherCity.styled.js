import styled from '@emotion/styled';

export const WeatherBar = styled.section`
  grid-area: weatherBar;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;

  width: 250px;
  height: 100%;
  /* min-height: calc(90vh - 50px); */
  background-color: rgb(21, 72, 149);
  /* backdrop-filter: blur(5px); */
  transform: translateX(${props => props.dataOffset}%);
  transition: 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px 0px;
  /* transform: translateX(-100%); */

  @media screen and (min-width: 767px) {
    transform: none;
    z-index: 101;

    position: sticky;
    top: 70px;

    width: 260px;
    height: inherit;

    border-radius: 12px;

    background-color: rgb(21, 72, 149, 0.9);
  }

  @media screen and (min-width: 1279px) {
    width: 280px;
    align-self: stretch;
    /* grid-template-columns: 1fr; */
    /* height: calc(100% - 120px); */
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
